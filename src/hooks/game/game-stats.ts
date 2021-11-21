import merge from 'lodash/merge';
import Vue from 'vue';
import GameState from '../../components/game-state';
import { debug } from '../../util/debug';

class Ticker {
    game_time: string
    time_mod: number
    time_mod_value: string
}

declare module 'vue/types/vue' {
    interface Vue {
        ticker: Ticker
    }
}

export class GameStats {
    private jq: JQuery<Element>;
    private rootOrig: JQuery<HTMLElement>;
    private root: JQuery<HTMLElement>;
    private stats: JQuery<HTMLElement>;
    private content: JQuery<HTMLElement>;
    private title: JQuery<HTMLElement>;
    private allRenderedSeparately = false;

    constructor(public base: Vue, private state: GameState) {
        this.jq = jQuery(base.$el);
        state.$watch('usersLoaded', () => {
            this.init();
        });
    }

    static fixTicker(base: Vue) {
        const old = base.$options.computed.ticker;
        merge(base.$options, {
            computed: {
                ticker: function () {
                    const tick: Ticker = (<any>old).apply(base);
                    return { ...tick, time_mod_value: tick.time_mod_value?.replace('k', '') };
                }
            }
        });
    }

    private init() {
        require('../../style/game/game-stats.less');

        this.root = jQuery('<div class="table-body-stats"/>').appendTo('div.table-body');
        this.stats = jQuery('<div class="TableHelper-content"/>').appendTo(this.root);
        this.loadCommonStatsElements();
        this.initExtraStatsTable();
        this.observeTabSwitch();
        window.onresize = (e) => {
            this.renderCommonStats();
        };
        this.state.$watch('gameOver', v => v && this.root.hide() && debug('gameover'));
    }

    private initExtraStatsTable() {
        const table = this.rootOrig.find('div.TableHelper-content-players');
        table.find('div.TableHelper-content-players-head').append('<div>Прибыль</div>', '<div>Круги</div>');
        table.find('div.TableHelper-content-players-row').each((i, el) => {
            const pl = this.state.players[i];
            let [laps, profit]: Array<JQuery<HTMLElement>> = [];
            jQuery(el).append(
                profit = jQuery('<div/>'),
                laps = jQuery('<div/>')
            ).addClass(`player_border_${pl.order}`);
            this.state.$watch(`players.${i}.laps`, v => {
                laps.text(v);
            }, { immediate: true });
            this.state.$watch(() => pl.income - pl.expenses, v => {
                const positive = v >= 0;
                profit.attr('title', `+${pl.income} | -${pl.expenses}`)
                    .addClass(positive ? 'profit_pos' : 'profit_neg')
                    .removeClass(!positive ? 'profit_pos' : 'profit_neg')
                    .text(this.state.formatMoney(Math.abs(v)));
            }, { immediate: true });
        });
    }

    private loadCommonStatsElements() {
        this.allRenderedSeparately = false;
        this.rootOrig = this.jq.find('div.TableHelper-content > div');
        this.content = this.rootOrig.find('div.TableHelper-content-stat');
        this.title = this.rootOrig.find('div._matchtitle');
        this.renderCommonStats();
    }

    private observeTabSwitch() {
        this.base.$watch('tab', v => {
            switch (v) {
                case 0:
                    if (this.allRenderedSeparately) {
                        this.title.remove();
                        this.content.remove();
                    }
                    this.loadCommonStatsElements();
                    this.initExtraStatsTable();
                    break;
                case 1:
                    this.jq.find('div.TableHelper-content-options').append(
                        jQuery(`
                            <div class="form2-row">
                                <div class="form2-checkbox">
                                    <input type="checkbox" class="switcher" id="table-opt-split-common-stats"> <label for="table-opt-split-common-stats">Показывать общую статистику в отдельном блоке</label>
                                </div>
                            </div>
                            `)
                            .find('input').prop('checked', this.state.settings.splitCommonStats).on('change', (e) => {
                                this.state.settings.splitCommonStats = e.delegateTarget.checked;
                                this.renderCommonStats();
                            }).end())
                    break;
            }
        });
    }

    private renderCommonStats() {
        const renderSeparately = this.isEnoughWidth() && this.state.settings.splitCommonStats;
        const ctr = renderSeparately ? this.stats : this.rootOrig;
        const rerender = renderSeparately !== this.allRenderedSeparately;
        renderSeparately && !this.state.gameOver && this.root.show() || this.root.hide();
        rerender && this.content.detach().prependTo(ctr);
        this.title.length && rerender && this.title.detach().prependTo(ctr);
        this.title.length && (this.allRenderedSeparately = renderSeparately);
    }

    private isEnoughWidth() {
        return window.matchMedia('(min-aspect-ratio: 85/50)').matches;
    }
}