"use strict";
(self.webpackChunkmap = self.webpackChunkmap || []).push([
  [623],
  {
    623: (Gr, ze, d) => {
      d.r(ze), d.d(ze, { default: () => Lr });
      var p = d(4755),
        t = d(3020);
      const T = {
        id: "",
        year: "",
        collection: "",
        name: "",
        description: "",
        coordinates: [[0, 0, 0]],
        code: "",
        tramos: "",
        starts: "",
        ends: "",
        type: "",
        municipality: "",
        length: "",
        score: 0,
      };
      var oe = d(3144),
        h = d(1135);
      let U = (() => {
          class i {
            constructor(e) {
              (this.http = e),
                (this.GOOGLE_MAPS_KEY =
                  "AIzaSyCSHQ-NWX3BCmDxOdW-x0W9UbdtyJwWZEM"),
                (this.loaded$ = new h.X(!1)),
                (this.$mapFilters = (0, t.tdS)({
                  parksEmblematics: !0,
                  parksEva: !0,
                  parksNewOrRestored: !0,
                  parksRegulars: !0,
                  bikelanes2022: !1,
                  bikelanes2023: !0,
                }));
            }
            load() {
              console.log("loading map..."),
                !this.loaded$.getValue() &&
                  this.http
                    .jsonp(
                      `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_MAPS_KEY}`,
                      "callback"
                    )
                    .subscribe({
                      next: (e) => {
                        this.loaded$.next(!0);
                      },
                      error: (e) => {
                        console.error(e), this.loaded$.next(!1);
                      },
                    });
            }
            loaded() {
              return this.loaded$;
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.LFG(oe.eN));
            }),
            (i.ɵprov = t.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        Fe = (() => {
          class i {
            constructor(e, r) {
              (this.httpClient = e),
                (this.googleMapService = r),
                (this.API_URL = "https://api.comovamosnl.org/v2"),
                (this.$selectedBikelane = (0, t.tdS)(T)),
                (this.$bikelanes = (0, t.tdS)([T])),
                (this.$filteredBikelanes = (0, t.Flj)(() => {
                  const o = this.googleMapService.$mapFilters();
                  return this.$bikelanes().filter(
                    (s) =>
                      !!(
                        (o.bikelanes2022 && "2022" === s.year) ||
                        (o.bikelanes2023 && "2023" === s.year)
                      )
                  );
                })),
                this.$bikelanes.set(this.cachedBikelanes);
            }
            get cachedBikelanes() {
              const e = localStorage.getItem("bikelanes");
              return JSON.parse(e) ?? [T];
            }
            set cachedBikelanes(e) {
              e && localStorage.setItem("bikelanes", JSON.stringify(e));
            }
            fetchBikelanes() {
              this.httpClient.get(`${this.API_URL}/bikelanes`).subscribe({
                next: (e) => {
                  this.$bikelanes.set(e.data), (this.cachedBikelanes = e.data);
                },
                error: (e) => {
                  console.error(e);
                },
              });
            }
            selectBikelane(e) {
              const o = this.$bikelanes().find((s) => s.id === e);
              o
                ? this.$selectedBikelane.set(o)
                : console.error("No se encontr\xf3 la ciclov\xeda");
            }
            deselectBikelane() {
              this.$selectedBikelane.set(T);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.LFG(oe.eN), t.LFG(U));
            }),
            (i.ɵprov = t.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })();
      function ui(i, n) {
        if ((1 & i && t._UZ(0, "i", 12), 2 & i)) {
          const e = n.$implicit,
            r = t.oxw();
          t.Q6J(
            "ngClass",
            e <= (r.$selectedBikelane().score / 10) * 5
              ? "fas fa-star"
              : "far fa-star"
          );
        }
      }
      function hi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 13),
            t._UZ(2, "i", 14),
            t.qZA(),
            t.TgZ(3, "td", 15)(4, "span"),
            t._uU(5),
            t.qZA(),
            t._uU(6, " - "),
            t.TgZ(7, "span"),
            t._uU(8),
            t.qZA()()()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(5),
            t.hij(" ", e.$selectedBikelane().starts, " "),
            t.xp6(3),
            t.hij(" ", e.$selectedBikelane().ends, " ");
        }
      }
      function gi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 16),
            t._UZ(2, "i", 17),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(4), t.hij("", e.$selectedBikelane().length, " km");
        }
      }
      function pi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 16),
            t._UZ(2, "i", 18),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(4), t.hij(" ", e.$selectedBikelane().type, " ");
        }
      }
      const fi = function () {
        return [1, 2, 3, 4, 5];
      };
      let mi = (() => {
          class i {
            constructor(e) {
              (this.bikelaneService = e),
                (this.$selectedBikelane =
                  this.bikelaneService.$selectedBikelane);
            }
            deselectBikelane() {
              this.bikelaneService.deselectBikelane();
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(Fe));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["app-bikelane-sidebar-component"]],
              standalone: !0,
              features: [t.jDz],
              decls: 18,
              vars: 7,
              consts: [
                [1, "sidebar-component"],
                [1, "offcanvas-header", "align-items-start", "pb-0"],
                ["id", "offcanvasLabel", 1, "offcanvas-title"],
                [
                  "type",
                  "button",
                  "aria-label",
                  "Close",
                  1,
                  "btn-close",
                  "text-reset",
                  3,
                  "click",
                ],
                [1, "offcanvas-body", "pt-0"],
                [1, "mb-3"],
                [1, "d-flex"],
                [1, "me-2"],
                [1, "star-rating", "me-2"],
                [3, "ngClass", 4, "ngFor", "ngForOf"],
                [1, "table", "table-bordered"],
                [4, "ngIf"],
                [3, "ngClass"],
                [2, "border-top", "0", "width", "30px"],
                [1, "fa-solid", "fa-location-dot"],
                [2, "border-top", "0"],
                [2, "width", "30px"],
                [1, "fa-solid", "fa-ruler"],
                [1, "fa-solid", "fa-person-biking"],
              ],
              template: function (e, r) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2),
                  t._uU(3),
                  t.qZA(),
                  t.TgZ(4, "button", 3),
                  t.NdJ("click", function () {
                    return r.deselectBikelane();
                  }),
                  t.qZA()(),
                  t.TgZ(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "span", 7),
                  t._uU(9),
                  t.qZA(),
                  t.TgZ(10, "div", 8),
                  t.YNc(11, ui, 1, 1, "i", 9),
                  t.qZA(),
                  t.TgZ(12, "span"),
                  t._uU(13, "(0)"),
                  t.qZA()(),
                  t.TgZ(14, "table", 10),
                  t.YNc(15, hi, 9, 2, "tr", 11),
                  t.YNc(16, gi, 5, 1, "tr", 11),
                  t.YNc(17, pi, 5, 1, "tr", 11),
                  t.qZA()()()()),
                  2 & e &&
                    (t.xp6(3),
                    t.hij(" ", r.$selectedBikelane().name, " "),
                    t.xp6(6),
                    t.hij(" ", (r.$selectedBikelane().score / 10) * 5, " "),
                    t.xp6(2),
                    t.Q6J("ngForOf", t.DdM(6, fi)),
                    t.xp6(4),
                    t.Q6J("ngIf", r.$selectedBikelane().starts),
                    t.xp6(1),
                    t.Q6J("ngIf", r.$selectedBikelane().length),
                    t.xp6(1),
                    t.Q6J("ngIf", r.$selectedBikelane().type));
              },
              dependencies: [p.ez, p.mk, p.sg, p.O5],
              styles: [
                ".sidebar-component[_ngcontent-%COMP%]{background-color:#fff;height:100%}",
              ],
            })),
            i
          );
        })(),
        _i = (() => {
          class i {
            constructor() {
              this.value = 0;
            }
            gaugeValue() {
              return 20 * Math.round(this.value / 20);
            }
            getValue() {
              return Math.round(isNaN(this.value) ? 0 : this.value);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["app-gauge-component"]],
              inputs: { value: "value", label: "label" },
              standalone: !0,
              features: [t.jDz],
              decls: 7,
              vars: 3,
              consts: [
                [1, "gauge-component"],
                [1, "gauge"],
                [3, "ngClass"],
                [1, "gauge-value"],
                [1, "gauge-label"],
              ],
              template: function (e, r) {
                1 & e &&
                  (t.TgZ(0, "div", 0)(1, "div", 1),
                  t._UZ(2, "div", 2),
                  t.qZA(),
                  t.TgZ(3, "span", 3),
                  t._uU(4),
                  t.qZA(),
                  t.TgZ(5, "span", 4),
                  t._uU(6),
                  t.qZA()()),
                  2 & e &&
                    (t.xp6(2),
                    t.Q6J(
                      "ngClass",
                      "gauge__meter gauge__meter--" + r.gaugeValue()
                    ),
                    t.xp6(2),
                    t.hij("", r.getValue(), "%"),
                    t.xp6(2),
                    t.Oqu(r.label));
              },
              dependencies: [p.ez, p.mk],
              styles: [
                '.gauge-component[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.gauge[_ngcontent-%COMP%]{padding-bottom:50%;position:relative;width:100%;height:0;overflow:hidden}.gauge[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#ccc}.gauge[_ngcontent-%COMP%]:after{content:"";background:#fff;position:absolute;inset:40% 20% -60%;border-radius:50%}.gauge__meter[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;overflow:hidden;transform-origin:center bottom}.gauge__meter--20[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gauge-rotate-20 1s forwards}.gauge__meter--20[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#de2f31}@keyframes _ngcontent-%COMP%_gauge-rotate-20{0%{transform:rotate(.5turn)}to{transform:rotate(.6turn)}}.gauge__meter--40[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gauge-rotate-40 1s forwards}.gauge__meter--40[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#de5c2f}@keyframes _ngcontent-%COMP%_gauge-rotate-40{0%{transform:rotate(.5turn)}to{transform:rotate(.7turn)}}.gauge__meter--60[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gauge-rotate-60 1s forwards}.gauge__meter--60[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#e5a147}@keyframes _ngcontent-%COMP%_gauge-rotate-60{0%{transform:rotate(.5turn)}to{transform:rotate(.8turn)}}.gauge__meter--80[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gauge-rotate-80 1s forwards}.gauge__meter--80[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#41b565}@keyframes _ngcontent-%COMP%_gauge-rotate-80{0%{transform:rotate(.5turn)}to{transform:rotate(.9turn)}}.gauge__meter--100[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gauge-rotate-100 1s forwards}.gauge__meter--100[_ngcontent-%COMP%]:before{content:"";position:absolute;height:200%;width:100%;border-radius:50%;background-color:#41b565}@keyframes _ngcontent-%COMP%_gauge-rotate-100{0%{transform:rotate(.5turn)}to{transform:rotate(1turn)}}',
              ],
            })),
            i
          );
        })();
      const N = {
        id: 0,
        name: "",
        address: "",
        location: { lat: 0, lng: 0 },
        url: "",
        googleMapsId: "",
        googleMapsUrl: "",
        evaReportQty: 0,
        evaMainActivity: "",
        evaSafetyScore: 0,
        evaCleanlinessScore: 0,
        evaScore: 0,
        socialScore: 0,
        ambientalScore: 0,
        safetyScore: 0,
        qualitativeScore: 0,
        score: 0,
        hasQualitativeEvaluation: !1,
        hasPhysicalActivitySpace: !1,
        hasBathroom: !1,
        hasChildrenSpace: !1,
        hasElderlySpace: !1,
        hasCommunityActivitySchedule: !1,
        accessRestriction: "",
        hasAccessRestriction: !1,
        size: "",
        recordedAt: "",
        recordedYear: "",
        isEmblematic: !1,
        isEva: !1,
        isNewOrRestored: !1,
        conditions: null,
      };
      let Pe = (() => {
        class i {
          constructor(e, r) {
            (this.httpClient = e),
              (this.googleMapService = r),
              (this.API_URL = "https://api.comovamosnl.org/v2"),
              (this.$selectedPark = (0, t.tdS)(N)),
              (this.$parks = (0, t.tdS)([N])),
              (this.$filteredParks = (0, t.Flj)(() => {
                const o = this.googleMapService.$mapFilters();
                return this.$parks().filter(
                  (s) =>
                    !!(
                      (o.parksEmblematics && s.isEmblematic) ||
                      (o.parksRegulars && !s.isEmblematic) ||
                      (o.parksEva && s.isEva) ||
                      (o.parksNewOrRestored && s.isNewOrRestored)
                    )
                );
              })),
              this.$parks.set(this.cachedParks);
          }
          get cachedParks() {
            const e = localStorage.getItem("parks");
            return JSON.parse(e) ?? [N];
          }
          set cachedParks(e) {
            e && localStorage.setItem("parks", JSON.stringify(e));
          }
          fetchParks() {
            this.httpClient.get(`${this.API_URL}/parks`).subscribe({
              next: (e) => {
                this.$parks.set(e.data), (this.cachedParks = e.data);
              },
              error: (e) => {
                console.error(e);
              },
            });
          }
          selectPark(e) {
            const o = this.$parks().find((s) => s.id === e);
            o
              ? this.$selectedPark.set(o)
              : console.error("No se encontr\xf3 el parque");
          }
          deselectPark() {
            this.$selectedPark.set(N);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(t.LFG(oe.eN), t.LFG(U));
          }),
          (i.ɵprov = t.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
          i
        );
      })();
      function yi(i, n) {
        if ((1 & i && t._UZ(0, "i", 21), 2 & i)) {
          const e = n.$implicit,
            r = t.oxw();
          t.Q6J(
            "ngClass",
            e <= r.$selectedPark().evaScore ? "fas fa-star" : "far fa-star"
          );
        }
      }
      function vi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 22),
            t._UZ(1, "app-gauge-component", 23)(2, "app-gauge-component", 24)(
              3,
              "app-gauge-component",
              25
            )(4, "app-gauge-component", 26),
            t.qZA()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(1),
            t.Q6J("value", 10 * e.$selectedPark().socialScore),
            t.xp6(1),
            t.Q6J("value", 10 * e.$selectedPark().ambientalScore),
            t.xp6(1),
            t.Q6J("value", 10 * e.$selectedPark().safetyScore),
            t.xp6(1),
            t.Q6J("value", (e.$selectedPark().evaScore / 5) * 10 * 10);
        }
      }
      function bi(i, n) {
        1 & i && (t.TgZ(0, "button", 30), t._uU(1, " Detalles "), t.qZA());
      }
      const Mi = function (i) {
        return { active: i };
      };
      function Ci(i, n) {
        if (
          (1 & i && (t.TgZ(0, "button", 31), t._uU(1, " Eva "), t.qZA()), 2 & i)
        ) {
          const e = t.oxw(2);
          t.Q6J("ngClass", t.VKq(1, Mi, !e.showDetails));
        }
      }
      function ki(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "nav")(1, "div", 27),
            t.YNc(2, bi, 2, 0, "button", 28),
            t.YNc(3, Ci, 2, 3, "button", 29),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(2),
            t.Q6J("ngIf", e.showDetails),
            t.xp6(1),
            t.Q6J("ngIf", e.showEva);
        }
      }
      function wi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 38),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.qZA(),
            t._UZ(5, "td"),
            t.qZA()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(4), t.Oqu(e.$selectedPark().conditions);
        }
      }
      function Di(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 39),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.qZA(),
            t._UZ(5, "td"),
            t.qZA()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(4), t.Oqu(e.$selectedPark().size);
        }
      }
      function Ai(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 40),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4),
            t.qZA(),
            t._UZ(5, "td"),
            t.qZA()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(4), t.Oqu(e.$selectedPark().accessRestriction);
        }
      }
      function Vi(i, n) {
        1 & i && t._UZ(0, "i", 44);
      }
      function Ei(i, n) {
        1 & i && t._UZ(0, "i", 45);
      }
      function Si(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 41),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4, "Espacios de actividad f\xedsica"),
            t.qZA(),
            t.TgZ(5, "td"),
            t.YNc(6, Vi, 1, 0, "i", 42),
            t.YNc(7, Ei, 1, 0, "i", 43),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().hasPhysicalActivitySpace),
            t.xp6(1),
            t.Q6J("ngIf", !e.$selectedPark().hasPhysicalActivitySpace);
        }
      }
      function Ii(i, n) {
        1 & i && t._UZ(0, "i", 44);
      }
      function Oi(i, n) {
        1 & i && t._UZ(0, "i", 45);
      }
      function xi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 46),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4, "Ba\xf1os"),
            t.qZA(),
            t.TgZ(5, "td"),
            t.YNc(6, Ii, 1, 0, "i", 42),
            t.YNc(7, Oi, 1, 0, "i", 43),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().hasBathroom),
            t.xp6(1),
            t.Q6J("ngIf", !e.$selectedPark().hasBathroom);
        }
      }
      function zi(i, n) {
        1 & i && t._UZ(0, "i", 44);
      }
      function Fi(i, n) {
        1 & i && t._UZ(0, "i", 45);
      }
      function Pi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 37),
            t._UZ(2, "i", 47),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4, "Equipamiento infantil"),
            t.qZA(),
            t.TgZ(5, "td"),
            t.YNc(6, zi, 1, 0, "i", 42),
            t.YNc(7, Fi, 1, 0, "i", 43),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().hasChildrenSpace),
            t.xp6(1),
            t.Q6J("ngIf", !e.$selectedPark().hasChildrenSpace);
        }
      }
      function Ti(i, n) {
        1 & i && t._UZ(0, "i", 44);
      }
      function Ni(i, n) {
        1 & i && t._UZ(0, "i", 45);
      }
      function Li(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td"),
            t._UZ(2, "i", 48),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4, "Equipamiento personas mayores"),
            t.qZA(),
            t.TgZ(5, "td"),
            t.YNc(6, Ti, 1, 0, "i", 42),
            t.YNc(7, Ni, 1, 0, "i", 43),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().hasElderlySpace),
            t.xp6(1),
            t.Q6J("ngIf", !e.$selectedPark().hasElderlySpace);
        }
      }
      function Gi(i, n) {
        1 & i && t._UZ(0, "i", 44);
      }
      function Ri(i, n) {
        1 & i && t._UZ(0, "i", 45);
      }
      function Zi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td"),
            t._UZ(2, "i", 49),
            t.qZA(),
            t.TgZ(3, "td"),
            t._uU(4, "Agenda de actividades"),
            t.qZA(),
            t.TgZ(5, "td"),
            t.YNc(6, Gi, 1, 0, "i", 42),
            t.YNc(7, Ri, 1, 0, "i", 43),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().hasCommunityActivitySchedule),
            t.xp6(1),
            t.Q6J("ngIf", !e.$selectedPark().hasCommunityActivitySchedule);
        }
      }
      function Bi(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 32)(1, "table", 33)(2, "tr")(3, "td", 34),
            t._UZ(4, "i", 35),
            t.qZA(),
            t.TgZ(5, "td", 36),
            t._uU(6),
            t.qZA(),
            t._UZ(7, "td", 36),
            t.qZA(),
            t.YNc(8, wi, 6, 1, "tr", 15),
            t.YNc(9, Di, 6, 1, "tr", 15),
            t.YNc(10, Ai, 6, 1, "tr", 15),
            t.YNc(11, Si, 8, 2, "tr", 15),
            t.YNc(12, xi, 8, 2, "tr", 15),
            t.YNc(13, Pi, 8, 2, "tr", 15),
            t.YNc(14, Li, 8, 2, "tr", 15),
            t.YNc(15, Zi, 8, 2, "tr", 15),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw();
          t.xp6(6),
            t.hij("\xdaltima revisi\xf3n ", e.$selectedPark().recordedYear, ""),
            t.xp6(2),
            t.Q6J("ngIf", e.$selectedPark().conditions),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().size),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasAccessRestriction),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasQualitativeEvaluation),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasQualitativeEvaluation),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasQualitativeEvaluation),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasQualitativeEvaluation),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().hasQualitativeEvaluation);
        }
      }
      function Ui(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 34),
            t._UZ(2, "i", 53),
            t.qZA(),
            t.TgZ(3, "td", 54)(4, "div", 55)(5, "span"),
            t._uU(6, " Princial actividad: "),
            t.qZA(),
            t.TgZ(7, "span"),
            t._uU(8),
            t.qZA()()()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(8), t.hij(" ", e.$selectedPark().evaMainActivity, " ");
        }
      }
      function $i(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "tr")(1, "td", 34),
            t._UZ(2, "i", 56),
            t.qZA(),
            t.TgZ(3, "td", 36),
            t._uU(4, "Personas que lo consideran seguro"),
            t.qZA(),
            t.TgZ(5, "td", 36),
            t._uU(6),
            t.qZA()()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(6), t.hij(" ", 100 * e.$selectedPark().evaSafetyScore, "% ");
        }
      }
      function qi(i, n) {
        if ((1 & i && (t.TgZ(0, "td", 36), t._uU(1), t.qZA()), 2 & i)) {
          const e = t.oxw(2);
          t.xp6(1),
            t.hij(" ", 100 * e.$selectedPark().evaCleanlinessScore, "% ");
        }
      }
      const Hi = function (i) {
        return { "show active": i };
      };
      function ji(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 50)(1, "table", 33),
            t.YNc(2, Ui, 9, 1, "tr", 15),
            t.YNc(3, $i, 7, 1, "tr", 15),
            t.TgZ(4, "tr")(5, "td", 34),
            t._UZ(6, "i", 51),
            t.qZA(),
            t.TgZ(7, "td", 36),
            t._uU(8, "Personas que lo consideran limpio"),
            t.qZA(),
            t.YNc(9, qi, 2, 1, "td", 52),
            t.qZA()()()),
          2 & i)
        ) {
          const e = t.oxw();
          let r;
          t.Q6J("ngClass", t.VKq(4, Hi, !e.showDetails)),
            t.xp6(2),
            t.Q6J(
              "ngIf",
              null == (r = e.$selectedPark()) ? null : r.evaMainActivity
            ),
            t.xp6(1),
            t.Q6J("ngIf", e.$selectedPark().evaSafetyScore),
            t.xp6(6),
            t.Q6J("ngIf", e.$selectedPark().evaCleanlinessScore);
        }
      }
      const Yi = function () {
        return [1, 2, 3, 4, 5];
      };
      let Wi = (() => {
        class i {
          constructor(e) {
            (this.parkService = e),
              (this.$selectedPark = this.parkService.$selectedPark),
              (this.showGauges = !1),
              (this.showDetails = !1),
              (this.showEva = !1),
              (0, t.cEC)(
                () => {
                  this.setSidebar();
                },
                { allowSignalWrites: !0 }
              );
          }
          ngOnInit() {}
          setSidebar() {
            const e = this.$selectedPark();
            (this.showGauges = !1),
              (this.showDetails = !0),
              (this.showEva = !1),
              (e.socialScore ||
                e.ambientalScore ||
                e.safetyScore ||
                e.evaScore) &&
                (this.showGauges = !0),
              (e.evaMainActivity ||
                e.evaSafetyScore ||
                e.evaCleanlinessScore) &&
                (this.showEva = !0);
          }
          deselectPark() {
            this.parkService.deselectPark();
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(t.Y36(Pe));
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["app-sidebar-component"]],
            standalone: !0,
            features: [t.jDz],
            decls: 30,
            vars: 11,
            consts: [
              [1, "sidebar-component"],
              [1, "offcanvas-header", "align-items-start", "pb-0"],
              ["id", "offcanvasLabel", 1, "offcanvas-title"],
              [
                "type",
                "button",
                "aria-label",
                "Close",
                1,
                "btn-close",
                "text-reset",
                3,
                "click",
              ],
              [1, "offcanvas-body", "pt-0"],
              [1, "d-flex", "mb-3"],
              [1, "me-2"],
              [1, "star-rating", "me-2"],
              [3, "ngClass", 4, "ngFor", "ngForOf"],
              ["id", "gauges", "class", "mt-3 mb-3", 4, "ngIf"],
              [1, "table", "table-bordered", "mb-0"],
              [2, "width", "30px", "border-bottom", "0"],
              [1, "fa-solid", "fa-location-dot"],
              [2, "border-bottom", "0"],
              ["target", "_blank", 3, "href"],
              [4, "ngIf"],
              ["id", "nav-tabContent", 1, "tab-content"],
              [
                "class",
                "tab-pane fade show active",
                "id",
                "nav-details",
                "role",
                "tabpanel",
                "aria-labelledby",
                "nav-details-tab",
                4,
                "ngIf",
              ],
              [
                "class",
                "tab-pane fade",
                "id",
                "nav-eva",
                "role",
                "tabpanel",
                "aria-labelledby",
                "nav-eva-tab",
                3,
                "ngClass",
                4,
                "ngIf",
              ],
              [1, "d-grid", "p-0"],
              [
                "href",
                "https://wa.me/+528130765538",
                "target",
                "_blank",
                1,
                "btn",
                "btn-primary",
                "btn-xl",
              ],
              [3, "ngClass"],
              ["id", "gauges", 1, "mt-3", "mb-3"],
              ["label", "Dimensi\xf3n Social", 3, "value"],
              ["label", "Dimensi\xf3n Ambiental", 3, "value"],
              ["label", "Seguridad", 3, "value"],
              ["label", "Satisfacci\xf3n Ciudadana", 3, "value"],
              [
                "id",
                "nav-tab",
                "role",
                "tablist",
                1,
                "nav",
                "nav-tabs",
                "nav-fill",
              ],
              [
                "class",
                "nav-link active",
                "id",
                "nav-details-tab",
                "data-bs-toggle",
                "tab",
                "data-bs-target",
                "#nav-details",
                "type",
                "button",
                "role",
                "tab",
                "aria-controls",
                "nav-details",
                "aria-selected",
                "true",
                4,
                "ngIf",
              ],
              [
                "class",
                "nav-link",
                "id",
                "nav-eva-tab",
                "data-bs-toggle",
                "tab",
                "data-bs-target",
                "#nav-eva",
                "type",
                "button",
                "role",
                "tab",
                "aria-controls",
                "nav-eva",
                "aria-selected",
                "false",
                3,
                "ngClass",
                4,
                "ngIf",
              ],
              [
                "id",
                "nav-details-tab",
                "data-bs-toggle",
                "tab",
                "data-bs-target",
                "#nav-details",
                "type",
                "button",
                "role",
                "tab",
                "aria-controls",
                "nav-details",
                "aria-selected",
                "true",
                1,
                "nav-link",
                "active",
              ],
              [
                "id",
                "nav-eva-tab",
                "data-bs-toggle",
                "tab",
                "data-bs-target",
                "#nav-eva",
                "type",
                "button",
                "role",
                "tab",
                "aria-controls",
                "nav-eva",
                "aria-selected",
                "false",
                1,
                "nav-link",
                3,
                "ngClass",
              ],
              [
                "id",
                "nav-details",
                "role",
                "tabpanel",
                "aria-labelledby",
                "nav-details-tab",
                1,
                "tab-pane",
                "fade",
                "show",
                "active",
              ],
              [1, "table", "table-bordered"],
              [2, "width", "30px", "border-top", "0"],
              [1, "fas", "fa-list-check"],
              [2, "border-top", "0"],
              [2, "width", "30px"],
              [1, "fas", "fa-hand-sparkles"],
              [1, "fas", "fa-tree"],
              [1, "fas", "fa-lock"],
              [1, "fas", "fa-running"],
              ["class", "fa-solid fa-check", 4, "ngIf"],
              ["class", "fa-solid fa-xmark", 4, "ngIf"],
              [1, "fa-solid", "fa-check"],
              [1, "fa-solid", "fa-xmark"],
              [1, "fas", "fa-restroom"],
              [1, "fas", "fa-child"],
              [1, "fa-solid", "fa-person-cane"],
              [1, "fa-solid", "fa-calendar-day"],
              [
                "id",
                "nav-eva",
                "role",
                "tabpanel",
                "aria-labelledby",
                "nav-eva-tab",
                1,
                "tab-pane",
                "fade",
                3,
                "ngClass",
              ],
              [1, "fa-solid", "fa-trash-can"],
              ["style", "border-top: 0", 4, "ngIf"],
              [1, "fa-solid", "fa-users"],
              ["colspan", "2", 2, "border-top", "0"],
              [1, "d-flex", "justify-content-between"],
              [1, "fa-solid", "fa-shield-halved"],
            ],
            template: function (e, r) {
              1 & e &&
                (t.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2),
                t._uU(3),
                t.qZA(),
                t.TgZ(4, "button", 3),
                t.NdJ("click", function () {
                  return r.deselectPark();
                }),
                t.qZA()(),
                t.TgZ(5, "div", 4)(6, "div")(7, "div", 5)(8, "span", 6),
                t._uU(9),
                t.qZA(),
                t.TgZ(10, "div", 7),
                t.YNc(11, yi, 1, 1, "i", 8),
                t.qZA(),
                t.TgZ(12, "span"),
                t._uU(13),
                t.qZA()(),
                t.YNc(14, vi, 5, 4, "div", 9),
                t.TgZ(15, "table", 10)(16, "tr")(17, "td", 11),
                t._UZ(18, "i", 12),
                t.qZA(),
                t.TgZ(19, "td", 13)(20, "a", 14),
                t._uU(21),
                t.qZA()()()(),
                t.TgZ(22, "div"),
                t.YNc(23, ki, 4, 2, "nav", 15),
                t.TgZ(24, "div", 16),
                t.YNc(25, Bi, 16, 9, "div", 17),
                t.YNc(26, ji, 10, 6, "div", 18),
                t.qZA()(),
                t.TgZ(27, "div", 19)(28, "a", 20),
                t._uU(29, " Eval\xfaa este parque "),
                t.qZA()()()()()),
                2 & e &&
                  (t.xp6(3),
                  t.hij(" ", r.$selectedPark().name, " "),
                  t.xp6(6),
                  t.hij(" ", r.$selectedPark().evaScore, " "),
                  t.xp6(2),
                  t.Q6J("ngForOf", t.DdM(10, Yi)),
                  t.xp6(2),
                  t.hij("(", r.$selectedPark().evaReportQty, ")"),
                  t.xp6(1),
                  t.Q6J("ngIf", r.showGauges),
                  t.xp6(6),
                  t.s9C("href", r.$selectedPark().googleMapsUrl, t.LSH),
                  t.xp6(1),
                  t.hij(" ", r.$selectedPark().address, " "),
                  t.xp6(2),
                  t.Q6J("ngIf", r.showDetails || r.showEva),
                  t.xp6(2),
                  t.Q6J("ngIf", r.showDetails),
                  t.xp6(1),
                  t.Q6J("ngIf", r.showEva));
            },
            dependencies: [p.ez, p.mk, p.sg, p.O5, _i],
            styles: [
              ".sidebar-component[_ngcontent-%COMP%]{background-color:#fff;height:100vh;overflow-y:scroll}#gauges[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;column-gap:14px}",
            ],
          })),
          i
        );
      })();
      var Te = d(9751),
        k = d(7579),
        E = d(9841),
        Ji = d(3900),
        S = d(5698),
        w = d(4004),
        Qi = d(4482),
        Ne = d(5403),
        Le = d(8421),
        Xi = d(5032);
      function g(i) {
        return (0, Qi.e)((n, e) => {
          (0, Le.Xf)(i).subscribe((0, Ne.x)(e, () => e.complete(), Xi.Z)),
            !e.closed && n.subscribe(e);
        });
      }
      const Ge = ["*"];
      class b {
        _clearListeners() {
          for (const n of this._listeners) n.remove();
          this._listeners = [];
        }
        constructor(n) {
          (this._ngZone = n),
            (this._pending = []),
            (this._listeners = []),
            (this._targetStream = new h.X(void 0));
        }
        getLazyEmitter(n) {
          return this._targetStream.pipe(
            (0, Ji.w)((e) => {
              const r = new Te.y((o) => {
                if (!e)
                  return void this._pending.push({
                    observable: r,
                    observer: o,
                  });
                const s = e.addListener(n, (a) => {
                  this._ngZone.run(() => o.next(a));
                });
                if (s) return this._listeners.push(s), () => s.remove();
                o.complete();
              });
              return r;
            })
          );
        }
        setTarget(n) {
          const e = this._targetStream.value;
          n !== e &&
            (e && (this._clearListeners(), (this._pending = [])),
            this._targetStream.next(n),
            this._pending.forEach((r) => r.observable.subscribe(r.observer)),
            (this._pending = []));
        }
        destroy() {
          this._clearListeners(),
            (this._pending = []),
            this._targetStream.complete();
        }
      }
      const L = {
        center: { lat: 37.421995, lng: -122.084092 },
        zoom: 17,
        mapTypeId: "roadmap",
      };
      let f = (() => {
        class i {
          set center(e) {
            this._center = e;
          }
          set zoom(e) {
            this._zoom = e;
          }
          set options(e) {
            this._options = e || L;
          }
          constructor(e, r, o) {
            if (
              ((this._elementRef = e),
              (this._ngZone = r),
              (this._eventManager = new b((0, t.f3M)(t.R0b))),
              (this.height = "500px"),
              (this.width = "500px"),
              (this._options = L),
              (this.mapInitialized = new t.vpe()),
              (this.authFailure = new t.vpe()),
              (this.boundsChanged =
                this._eventManager.getLazyEmitter("bounds_changed")),
              (this.centerChanged =
                this._eventManager.getLazyEmitter("center_changed")),
              (this.mapClick = this._eventManager.getLazyEmitter("click")),
              (this.mapDblclick =
                this._eventManager.getLazyEmitter("dblclick")),
              (this.mapDrag = this._eventManager.getLazyEmitter("drag")),
              (this.mapDragend = this._eventManager.getLazyEmitter("dragend")),
              (this.mapDragstart =
                this._eventManager.getLazyEmitter("dragstart")),
              (this.headingChanged =
                this._eventManager.getLazyEmitter("heading_changed")),
              (this.idle = this._eventManager.getLazyEmitter("idle")),
              (this.maptypeidChanged =
                this._eventManager.getLazyEmitter("maptypeid_changed")),
              (this.mapMousemove =
                this._eventManager.getLazyEmitter("mousemove")),
              (this.mapMouseout =
                this._eventManager.getLazyEmitter("mouseout")),
              (this.mapMouseover =
                this._eventManager.getLazyEmitter("mouseover")),
              (this.projectionChanged =
                this._eventManager.getLazyEmitter("projection_changed")),
              (this.mapRightclick =
                this._eventManager.getLazyEmitter("rightclick")),
              (this.tilesloaded =
                this._eventManager.getLazyEmitter("tilesloaded")),
              (this.tiltChanged =
                this._eventManager.getLazyEmitter("tilt_changed")),
              (this.zoomChanged =
                this._eventManager.getLazyEmitter("zoom_changed")),
              (this._isBrowser = (0, p.NF)(o)),
              this._isBrowser)
            ) {
              const s = window;
              (this._existingAuthFailureCallback = s.gm_authFailure),
                (s.gm_authFailure = () => {
                  this._existingAuthFailureCallback &&
                    this._existingAuthFailureCallback(),
                    this.authFailure.emit();
                });
            }
          }
          ngOnChanges(e) {
            (e.height || e.width) && this._setSize();
            const r = this.googleMap;
            r &&
              (e.options && r.setOptions(this._combineOptions()),
              e.center && this._center && r.setCenter(this._center),
              e.zoom && null != this._zoom && r.setZoom(this._zoom),
              e.mapTypeId && this.mapTypeId && r.setMapTypeId(this.mapTypeId));
          }
          ngOnInit() {
            this._isBrowser &&
              ((this._mapEl =
                this._elementRef.nativeElement.querySelector(".map-container")),
              this._setSize(),
              this._ngZone.runOutsideAngular(() => {
                this.googleMap = new google.maps.Map(
                  this._mapEl,
                  this._combineOptions()
                );
              }),
              this._eventManager.setTarget(this.googleMap),
              this.mapInitialized.emit(this.googleMap));
          }
          ngOnDestroy() {
            this._eventManager.destroy(),
              this._isBrowser &&
                (window.gm_authFailure = this._existingAuthFailureCallback);
          }
          fitBounds(e, r) {
            this._assertInitialized(), this.googleMap.fitBounds(e, r);
          }
          panBy(e, r) {
            this._assertInitialized(), this.googleMap.panBy(e, r);
          }
          panTo(e) {
            this._assertInitialized(), this.googleMap.panTo(e);
          }
          panToBounds(e, r) {
            this._assertInitialized(), this.googleMap.panToBounds(e, r);
          }
          getBounds() {
            return (
              this._assertInitialized(), this.googleMap.getBounds() || null
            );
          }
          getCenter() {
            return this._assertInitialized(), this.googleMap.getCenter();
          }
          getClickableIcons() {
            return (
              this._assertInitialized(), this.googleMap.getClickableIcons()
            );
          }
          getHeading() {
            return this._assertInitialized(), this.googleMap.getHeading();
          }
          getMapTypeId() {
            return this._assertInitialized(), this.googleMap.getMapTypeId();
          }
          getProjection() {
            return (
              this._assertInitialized(), this.googleMap.getProjection() || null
            );
          }
          getStreetView() {
            return this._assertInitialized(), this.googleMap.getStreetView();
          }
          getTilt() {
            return this._assertInitialized(), this.googleMap.getTilt();
          }
          getZoom() {
            return this._assertInitialized(), this.googleMap.getZoom();
          }
          get controls() {
            return this._assertInitialized(), this.googleMap.controls;
          }
          get data() {
            return this._assertInitialized(), this.googleMap.data;
          }
          get mapTypes() {
            return this._assertInitialized(), this.googleMap.mapTypes;
          }
          get overlayMapTypes() {
            return this._assertInitialized(), this.googleMap.overlayMapTypes;
          }
          _setSize() {
            if (this._mapEl) {
              const e = this._mapEl.style;
              (e.height =
                null === this.height ? "" : Be(this.height) || "500px"),
                (e.width =
                  null === this.width ? "" : Be(this.width) || "500px");
            }
          }
          _combineOptions() {
            const e = this._options || {};
            return {
              ...e,
              center: this._center || e.center || L.center,
              zoom: this._zoom ?? e.zoom ?? L.zoom,
              mapTypeId: this.mapTypeId || e.mapTypeId || L.mapTypeId,
            };
          }
          _assertInitialized() {}
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(t.Y36(t.SBq), t.Y36(t.R0b), t.Y36(t.Lbi));
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["google-map"]],
            inputs: {
              height: "height",
              width: "width",
              mapTypeId: "mapTypeId",
              center: "center",
              zoom: "zoom",
              options: "options",
            },
            outputs: {
              mapInitialized: "mapInitialized",
              authFailure: "authFailure",
              boundsChanged: "boundsChanged",
              centerChanged: "centerChanged",
              mapClick: "mapClick",
              mapDblclick: "mapDblclick",
              mapDrag: "mapDrag",
              mapDragend: "mapDragend",
              mapDragstart: "mapDragstart",
              headingChanged: "headingChanged",
              idle: "idle",
              maptypeidChanged: "maptypeidChanged",
              mapMousemove: "mapMousemove",
              mapMouseout: "mapMouseout",
              mapMouseover: "mapMouseover",
              projectionChanged: "projectionChanged",
              mapRightclick: "mapRightclick",
              tilesloaded: "tilesloaded",
              tiltChanged: "tiltChanged",
              zoomChanged: "zoomChanged",
            },
            exportAs: ["googleMap"],
            features: [t.TTD],
            ngContentSelectors: Ge,
            decls: 2,
            vars: 0,
            consts: [[1, "map-container"]],
            template: function (e, r) {
              1 & e && (t.F$t(), t._UZ(0, "div", 0), t.Hsn(1));
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          i
        );
      })();
      const Ki = /([A-Za-z%]+)$/;
      function Be(i) {
        return null == i ? "" : Ki.test(i) ? i : `${i}px`;
      }
      const an = { position: { lat: 37.421995, lng: -122.084092 } };
      let ae = (() => {
          class i {
            set title(e) {
              this._title = e;
            }
            set position(e) {
              this._position = e;
            }
            set label(e) {
              this._label = e;
            }
            set clickable(e) {
              this._clickable = e;
            }
            set options(e) {
              this._options = e;
            }
            set icon(e) {
              this._icon = e;
            }
            set visible(e) {
              this._visible = e;
            }
            constructor(e, r) {
              (this._googleMap = e),
                (this._ngZone = r),
                (this._eventManager = new b((0, t.f3M)(t.R0b))),
                (this.animationChanged =
                  this._eventManager.getLazyEmitter("animation_changed")),
                (this.mapClick = this._eventManager.getLazyEmitter("click")),
                (this.clickableChanged =
                  this._eventManager.getLazyEmitter("clickable_changed")),
                (this.cursorChanged =
                  this._eventManager.getLazyEmitter("cursor_changed")),
                (this.mapDblclick =
                  this._eventManager.getLazyEmitter("dblclick")),
                (this.mapDrag = this._eventManager.getLazyEmitter("drag")),
                (this.mapDragend =
                  this._eventManager.getLazyEmitter("dragend")),
                (this.draggableChanged =
                  this._eventManager.getLazyEmitter("draggable_changed")),
                (this.mapDragstart =
                  this._eventManager.getLazyEmitter("dragstart")),
                (this.flatChanged =
                  this._eventManager.getLazyEmitter("flat_changed")),
                (this.iconChanged =
                  this._eventManager.getLazyEmitter("icon_changed")),
                (this.mapMousedown =
                  this._eventManager.getLazyEmitter("mousedown")),
                (this.mapMouseout =
                  this._eventManager.getLazyEmitter("mouseout")),
                (this.mapMouseover =
                  this._eventManager.getLazyEmitter("mouseover")),
                (this.mapMouseup =
                  this._eventManager.getLazyEmitter("mouseup")),
                (this.positionChanged =
                  this._eventManager.getLazyEmitter("position_changed")),
                (this.mapRightclick =
                  this._eventManager.getLazyEmitter("rightclick")),
                (this.shapeChanged =
                  this._eventManager.getLazyEmitter("shape_changed")),
                (this.titleChanged =
                  this._eventManager.getLazyEmitter("title_changed")),
                (this.visibleChanged =
                  this._eventManager.getLazyEmitter("visible_changed")),
                (this.zindexChanged =
                  this._eventManager.getLazyEmitter("zindex_changed"));
            }
            ngOnInit() {
              this._googleMap._isBrowser &&
                (this._ngZone.runOutsideAngular(() => {
                  this.marker = new google.maps.Marker(this._combineOptions());
                }),
                this._assertInitialized(),
                this.marker.setMap(this._googleMap.googleMap),
                this._eventManager.setTarget(this.marker));
            }
            ngOnChanges(e) {
              const {
                marker: r,
                _title: o,
                _position: s,
                _label: a,
                _clickable: l,
                _icon: c,
                _visible: u,
              } = this;
              r &&
                (e.options && r.setOptions(this._combineOptions()),
                e.title && void 0 !== o && r.setTitle(o),
                e.position && s && r.setPosition(s),
                e.label && void 0 !== a && r.setLabel(a),
                e.clickable && void 0 !== l && r.setClickable(l),
                e.icon && c && r.setIcon(c),
                e.visible && void 0 !== u && r.setVisible(u));
            }
            ngOnDestroy() {
              this._eventManager.destroy(),
                this.marker && this.marker.setMap(null);
            }
            getAnimation() {
              return (
                this._assertInitialized(), this.marker.getAnimation() || null
              );
            }
            getClickable() {
              return this._assertInitialized(), this.marker.getClickable();
            }
            getCursor() {
              return this._assertInitialized(), this.marker.getCursor() || null;
            }
            getDraggable() {
              return this._assertInitialized(), !!this.marker.getDraggable();
            }
            getIcon() {
              return this._assertInitialized(), this.marker.getIcon() || null;
            }
            getLabel() {
              return this._assertInitialized(), this.marker.getLabel() || null;
            }
            getOpacity() {
              return (
                this._assertInitialized(), this.marker.getOpacity() || null
              );
            }
            getPosition() {
              return (
                this._assertInitialized(), this.marker.getPosition() || null
              );
            }
            getShape() {
              return this._assertInitialized(), this.marker.getShape() || null;
            }
            getTitle() {
              return this._assertInitialized(), this.marker.getTitle() || null;
            }
            getVisible() {
              return this._assertInitialized(), this.marker.getVisible();
            }
            getZIndex() {
              return this._assertInitialized(), this.marker.getZIndex() || null;
            }
            getAnchor() {
              return this._assertInitialized(), this.marker;
            }
            _combineOptions() {
              const e = this._options || an;
              return {
                ...e,
                title: this._title || e.title,
                position: this._position || e.position,
                label: this._label || e.label,
                clickable: this._clickable ?? e.clickable,
                map: this._googleMap.googleMap,
                icon: this._icon || e.icon,
                visible: this._visible ?? e.visible,
              };
            }
            _assertInitialized() {}
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(f), t.Y36(t.R0b));
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [["map-marker"]],
              inputs: {
                title: "title",
                position: "position",
                label: "label",
                clickable: "clickable",
                options: "options",
                icon: "icon",
                visible: "visible",
              },
              outputs: {
                animationChanged: "animationChanged",
                mapClick: "mapClick",
                clickableChanged: "clickableChanged",
                cursorChanged: "cursorChanged",
                mapDblclick: "mapDblclick",
                mapDrag: "mapDrag",
                mapDragend: "mapDragend",
                draggableChanged: "draggableChanged",
                mapDragstart: "mapDragstart",
                flatChanged: "flatChanged",
                iconChanged: "iconChanged",
                mapMousedown: "mapMousedown",
                mapMouseout: "mapMouseout",
                mapMouseover: "mapMouseover",
                mapMouseup: "mapMouseup",
                positionChanged: "positionChanged",
                mapRightclick: "mapRightclick",
                shapeChanged: "shapeChanged",
                titleChanged: "titleChanged",
                visibleChanged: "visibleChanged",
                zindexChanged: "zindexChanged",
              },
              exportAs: ["mapMarker"],
              features: [t.TTD],
            })),
            i
          );
        })(),
        Ue = (() => {
          class i {
            set options(e) {
              this._options.next(e || {});
            }
            set path(e) {
              this._path.next(e);
            }
            constructor(e, r) {
              (this._map = e),
                (this._ngZone = r),
                (this._eventManager = new b((0, t.f3M)(t.R0b))),
                (this._options = new h.X({})),
                (this._path = new h.X(void 0)),
                (this._destroyed = new k.x()),
                (this.polylineClick =
                  this._eventManager.getLazyEmitter("click")),
                (this.polylineDblclick =
                  this._eventManager.getLazyEmitter("dblclick")),
                (this.polylineDrag = this._eventManager.getLazyEmitter("drag")),
                (this.polylineDragend =
                  this._eventManager.getLazyEmitter("dragend")),
                (this.polylineDragstart =
                  this._eventManager.getLazyEmitter("dragstart")),
                (this.polylineMousedown =
                  this._eventManager.getLazyEmitter("mousedown")),
                (this.polylineMousemove =
                  this._eventManager.getLazyEmitter("mousemove")),
                (this.polylineMouseout =
                  this._eventManager.getLazyEmitter("mouseout")),
                (this.polylineMouseover =
                  this._eventManager.getLazyEmitter("mouseover")),
                (this.polylineMouseup =
                  this._eventManager.getLazyEmitter("mouseup")),
                (this.polylineRightclick =
                  this._eventManager.getLazyEmitter("rightclick"));
            }
            ngOnInit() {
              this._map._isBrowser &&
                (this._combineOptions()
                  .pipe((0, S.q)(1))
                  .subscribe((e) => {
                    this._ngZone.runOutsideAngular(
                      () => (this.polyline = new google.maps.Polyline(e))
                    ),
                      this._assertInitialized(),
                      this.polyline.setMap(this._map.googleMap),
                      this._eventManager.setTarget(this.polyline);
                  }),
                this._watchForOptionsChanges(),
                this._watchForPathChanges());
            }
            ngOnDestroy() {
              this._eventManager.destroy(),
                this._destroyed.next(),
                this._destroyed.complete(),
                this.polyline && this.polyline.setMap(null);
            }
            getDraggable() {
              return this._assertInitialized(), this.polyline.getDraggable();
            }
            getEditable() {
              return this._assertInitialized(), this.polyline.getEditable();
            }
            getPath() {
              return this._assertInitialized(), this.polyline.getPath();
            }
            getVisible() {
              return this._assertInitialized(), this.polyline.getVisible();
            }
            _combineOptions() {
              return (0, E.a)([this._options, this._path]).pipe(
                (0, w.U)(([e, r]) => ({ ...e, path: r || e.path }))
              );
            }
            _watchForOptionsChanges() {
              this._options.pipe(g(this._destroyed)).subscribe((e) => {
                this._assertInitialized(), this.polyline.setOptions(e);
              });
            }
            _watchForPathChanges() {
              this._path.pipe(g(this._destroyed)).subscribe((e) => {
                e && (this._assertInitialized(), this.polyline.setPath(e));
              });
            }
            _assertInitialized() {}
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(f), t.Y36(t.R0b));
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [["map-polyline"]],
              inputs: { options: "options", path: "path" },
              outputs: {
                polylineClick: "polylineClick",
                polylineDblclick: "polylineDblclick",
                polylineDrag: "polylineDrag",
                polylineDragend: "polylineDragend",
                polylineDragstart: "polylineDragstart",
                polylineMousedown: "polylineMousedown",
                polylineMousemove: "polylineMousemove",
                polylineMouseout: "polylineMouseout",
                polylineMouseover: "polylineMouseover",
                polylineMouseup: "polylineMouseup",
                polylineRightclick: "polylineRightclick",
              },
              exportAs: ["mapPolyline"],
            })),
            i
          );
        })(),
        mn = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({})),
            i
          );
        })();
      var _n = d(2076),
        yn = d(4742),
        vn = d(7669),
        bn = d(3268),
        Mn = d(1810);
      let $e = (() => {
          class i {
            constructor(e, r) {
              (this._renderer = e),
                (this._elementRef = r),
                (this.onChange = (o) => {}),
                (this.onTouched = () => {});
            }
            setProperty(e, r) {
              this._renderer.setProperty(this._elementRef.nativeElement, e, r);
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            setDisabledState(e) {
              this.setProperty("disabled", e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(t.Qsj), t.Y36(t.SBq));
            }),
            (i.ɵdir = t.lG2({ type: i })),
            i
          );
        })(),
        I = (() => {
          class i extends $e {}
          return (
            (i.ɵfac = (function () {
              let n;
              return function (r) {
                return (n || (n = t.n5z(i)))(r || i);
              };
            })()),
            (i.ɵdir = t.lG2({ type: i, features: [t.qOj] })),
            i
          );
        })();
      const M = new t.OlP("NgValueAccessor"),
        kn = { provide: M, useExisting: (0, t.Gpc)(() => le), multi: !0 };
      let le = (() => {
        class i extends I {
          writeValue(e) {
            this.setProperty("checked", e);
          }
        }
        return (
          (i.ɵfac = (function () {
            let n;
            return function (r) {
              return (n || (n = t.n5z(i)))(r || i);
            };
          })()),
          (i.ɵdir = t.lG2({
            type: i,
            selectors: [
              ["input", "type", "checkbox", "formControlName", ""],
              ["input", "type", "checkbox", "formControl", ""],
              ["input", "type", "checkbox", "ngModel", ""],
            ],
            hostBindings: function (e, r) {
              1 & e &&
                t.NdJ("change", function (s) {
                  return r.onChange(s.target.checked);
                })("blur", function () {
                  return r.onTouched();
                });
            },
            features: [t._Bn([kn]), t.qOj],
          })),
          i
        );
      })();
      const wn = { provide: M, useExisting: (0, t.Gpc)(() => ce), multi: !0 },
        An = new t.OlP("CompositionEventMode");
      let ce = (() => {
        class i extends $e {
          constructor(e, r, o) {
            super(e, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Dn() {
                  const i = (0, p.q)() ? (0, p.q)().getUserAgent() : "";
                  return /android (\d+)/.test(i.toLowerCase());
                })());
          }
          writeValue(e) {
            this.setProperty("value", e ?? "");
          }
          _handleInput(e) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(e);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(e) {
            (this._composing = !1), this._compositionMode && this.onChange(e);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(t.Y36(t.Qsj), t.Y36(t.SBq), t.Y36(An, 8));
          }),
          (i.ɵdir = t.lG2({
            type: i,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (e, r) {
              1 & e &&
                t.NdJ("input", function (s) {
                  return r._handleInput(s.target.value);
                })("blur", function () {
                  return r.onTouched();
                })("compositionstart", function () {
                  return r._compositionStart();
                })("compositionend", function (s) {
                  return r._compositionEnd(s.target.value);
                });
            },
            features: [t._Bn([wn]), t.qOj],
          })),
          i
        );
      })();
      const m = new t.OlP("NgValidators"),
        A = new t.OlP("NgAsyncValidators");
      function et(i) {
        return null != i;
      }
      function tt(i) {
        return (0, t.QGY)(i) ? (0, _n.D)(i) : i;
      }
      function it(i) {
        let n = {};
        return (
          i.forEach((e) => {
            n = null != e ? { ...n, ...e } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function nt(i, n) {
        return n.map((e) => e(i));
      }
      function rt(i) {
        return i.map((n) =>
          (function En(i) {
            return !i.validate;
          })(n)
            ? n
            : (e) => n.validate(e)
        );
      }
      function de(i) {
        return null != i
          ? (function ot(i) {
              if (!i) return null;
              const n = i.filter(et);
              return 0 == n.length
                ? null
                : function (e) {
                    return it(nt(e, n));
                  };
            })(rt(i))
          : null;
      }
      function ue(i) {
        return null != i
          ? (function st(i) {
              if (!i) return null;
              const n = i.filter(et);
              return 0 == n.length
                ? null
                : function (e) {
                    return (function Cn(...i) {
                      const n = (0, vn.jO)(i),
                        { args: e, keys: r } = (0, yn.D)(i),
                        o = new Te.y((s) => {
                          const { length: a } = e;
                          if (!a) return void s.complete();
                          const l = new Array(a);
                          let c = a,
                            u = a;
                          for (let v = 0; v < a; v++) {
                            let y = !1;
                            (0, Le.Xf)(e[v]).subscribe(
                              (0, Ne.x)(
                                s,
                                (ne) => {
                                  y || ((y = !0), u--), (l[v] = ne);
                                },
                                () => c--,
                                void 0,
                                () => {
                                  (!c || !y) &&
                                    (u || s.next(r ? (0, Mn.n)(r, l) : l),
                                    s.complete());
                                }
                              )
                            );
                          }
                        });
                      return n ? o.pipe((0, bn.Z)(n)) : o;
                    })(nt(e, n).map(tt)).pipe((0, w.U)(it));
                  };
            })(rt(i))
          : null;
      }
      function at(i, n) {
        return null === i ? [n] : Array.isArray(i) ? [...i, n] : [i, n];
      }
      function he(i) {
        return i ? (Array.isArray(i) ? i : [i]) : [];
      }
      function q(i, n) {
        return Array.isArray(i) ? i.includes(n) : i === n;
      }
      function dt(i, n) {
        const e = he(n);
        return (
          he(i).forEach((o) => {
            q(e, o) || e.push(o);
          }),
          e
        );
      }
      function ut(i, n) {
        return he(n).filter((e) => !q(i, e));
      }
      class ht {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []),
            (this._composedValidatorFn = de(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = ue(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((n) => n()),
            (this._onDestroyCallbacks = []);
        }
        reset(n = void 0) {
          this.control && this.control.reset(n);
        }
        hasError(n, e) {
          return !!this.control && this.control.hasError(n, e);
        }
        getError(n, e) {
          return this.control ? this.control.getError(n, e) : null;
        }
      }
      class _ extends ht {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class V extends ht {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class gt {
        constructor(n) {
          this._cd = n;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let pt = (() => {
          class i extends gt {
            constructor(e) {
              super(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(V, 2));
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (e, r) {
                2 & e &&
                  t.ekj("ng-untouched", r.isUntouched)(
                    "ng-touched",
                    r.isTouched
                  )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                    "ng-valid",
                    r.isValid
                  )("ng-invalid", r.isInvalid)("ng-pending", r.isPending);
              },
              features: [t.qOj],
            })),
            i
          );
        })(),
        ft = (() => {
          class i extends gt {
            constructor(e) {
              super(e);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(_, 10));
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (e, r) {
                2 & e &&
                  t.ekj("ng-untouched", r.isUntouched)(
                    "ng-touched",
                    r.isTouched
                  )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                    "ng-valid",
                    r.isValid
                  )("ng-invalid", r.isInvalid)("ng-pending", r.isPending)(
                    "ng-submitted",
                    r.isSubmitted
                  );
              },
              features: [t.qOj],
            })),
            i
          );
        })();
      const G = "VALID",
        j = "INVALID",
        x = "PENDING",
        R = "DISABLED";
      function fe(i) {
        return (Y(i) ? i.validators : i) || null;
      }
      function me(i, n) {
        return (Y(n) ? n.asyncValidators : i) || null;
      }
      function Y(i) {
        return null != i && !Array.isArray(i) && "object" == typeof i;
      }
      class vt {
        constructor(n, e) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(n),
            this._assignAsyncValidators(e);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === G;
        }
        get invalid() {
          return this.status === j;
        }
        get pending() {
          return this.status == x;
        }
        get disabled() {
          return this.status === R;
        }
        get enabled() {
          return this.status !== R;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(n) {
          this._assignValidators(n);
        }
        setAsyncValidators(n) {
          this._assignAsyncValidators(n);
        }
        addValidators(n) {
          this.setValidators(dt(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(dt(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(ut(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(ut(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return q(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return q(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0),
            this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((n) => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((e) => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1),
            this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((e) => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = x),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const e = this._parentMarkedDirty(n.onlySelf);
          (this.status = R),
            (this.errors = null),
            this._forEachChild((r) => {
              r.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: e }),
            this._onDisabledChange.forEach((r) => r(!0));
        }
        enable(n = {}) {
          const e = this._parentMarkedDirty(n.onlySelf);
          (this.status = G),
            this._forEachChild((r) => {
              r.enable({ ...n, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            }),
            this._updateAncestors({ ...n, skipPristineCheck: e }),
            this._onDisabledChange.forEach((r) => r(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === G || this.status === x) &&
                this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(n)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? R : G;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            (this.status = x), (this._hasOwnPendingAsyncValidator = !0);
            const e = tt(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((r) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(r, { emitEvent: n });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(n, e = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(n) {
          let e = n;
          return null == e ||
            (Array.isArray(e) || (e = e.split(".")), 0 === e.length)
            ? null
            : e.reduce((r, o) => r && r._find(o), this);
        }
        getError(n, e) {
          const r = e ? this.get(e) : this;
          return r && r.errors ? r.errors[n] : null;
        }
        hasError(n, e) {
          return !!this.getError(n, e);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new t.vpe()), (this.statusChanges = new t.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? R
            : this.errors
            ? j
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(x)
            ? x
            : this._anyControlsHaveStatus(j)
            ? j
            : G;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls((e) => e.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls((n) => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((n) => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          Y(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return (
            !n &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(n) {
          return null;
        }
        _assignValidators(n) {
          (this._rawValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedValidatorFn = (function xn(i) {
              return Array.isArray(i) ? de(i) : i || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function zn(i) {
              return Array.isArray(i) ? ue(i) : i || null;
            })(this._rawAsyncValidators));
        }
      }
      class _e extends vt {
        constructor(n, e, r) {
          super(fe(e), me(r, e)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(n, e) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(n, e, r = {}) {
          this.registerControl(n, e),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, e = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, e, r = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            e && this.registerControl(n, e),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, e = {}) {
          (function yt(i, n, e) {
            i._forEachChild((r, o) => {
              if (void 0 === e[o]) throw new t.vHH(1002, "");
            });
          })(this, 0, n),
            Object.keys(n).forEach((r) => {
              (function _t(i, n, e) {
                const r = i.controls;
                if (!(n ? Object.keys(r) : r).length) throw new t.vHH(1e3, "");
                if (!r[e]) throw new t.vHH(1001, "");
              })(this, !0, r),
                this.controls[r].setValue(n[r], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(n, e = {}) {
          null != n &&
            (Object.keys(n).forEach((r) => {
              const o = this.controls[r];
              o && o.patchValue(n[r], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e));
        }
        reset(n = {}, e = {}) {
          this._forEachChild((r, o) => {
            r.reset(n[o], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (n, e, r) => ((n[r] = e.getRawValue()), n)
          );
        }
        _syncPendingControls() {
          let n = this._reduceChildren(
            !1,
            (e, r) => !!r._syncPendingControls() || e
          );
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach((e) => {
            const r = this.controls[e];
            r && n(r, e);
          });
        }
        _setUpControls() {
          this._forEachChild((n) => {
            n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const [e, r] of Object.entries(this.controls))
            if (this.contains(e) && n(r)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, r, o) => ((r.enabled || this.disabled) && (e[o] = r.value), e)
          );
        }
        _reduceChildren(n, e) {
          let r = n;
          return (
            this._forEachChild((o, s) => {
              r = e(r, o, s);
            }),
            r
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls))
            if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(n) {
          return this.controls.hasOwnProperty(n) ? this.controls[n] : null;
        }
      }
      const z = new t.OlP("CallSetDisabledState", {
          providedIn: "root",
          factory: () => W,
        }),
        W = "always";
      function Z(i, n, e = W) {
        ye(i, n),
          n.valueAccessor.writeValue(i.value),
          (i.disabled || "always" === e) &&
            n.valueAccessor.setDisabledState?.(i.disabled),
          (function Tn(i, n) {
            n.valueAccessor.registerOnChange((e) => {
              (i._pendingValue = e),
                (i._pendingChange = !0),
                (i._pendingDirty = !0),
                "change" === i.updateOn && bt(i, n);
            });
          })(i, n),
          (function Ln(i, n) {
            const e = (r, o) => {
              n.valueAccessor.writeValue(r), o && n.viewToModelUpdate(r);
            };
            i.registerOnChange(e),
              n._registerOnDestroy(() => {
                i._unregisterOnChange(e);
              });
          })(i, n),
          (function Nn(i, n) {
            n.valueAccessor.registerOnTouched(() => {
              (i._pendingTouched = !0),
                "blur" === i.updateOn && i._pendingChange && bt(i, n),
                "submit" !== i.updateOn && i.markAsTouched();
            });
          })(i, n),
          (function Pn(i, n) {
            if (n.valueAccessor.setDisabledState) {
              const e = (r) => {
                n.valueAccessor.setDisabledState(r);
              };
              i.registerOnDisabledChange(e),
                n._registerOnDestroy(() => {
                  i._unregisterOnDisabledChange(e);
                });
            }
          })(i, n);
      }
      function X(i, n) {
        i.forEach((e) => {
          e.registerOnValidatorChange && e.registerOnValidatorChange(n);
        });
      }
      function ye(i, n) {
        const e = (function lt(i) {
          return i._rawValidators;
        })(i);
        null !== n.validator
          ? i.setValidators(at(e, n.validator))
          : "function" == typeof e && i.setValidators([e]);
        const r = (function ct(i) {
          return i._rawAsyncValidators;
        })(i);
        null !== n.asyncValidator
          ? i.setAsyncValidators(at(r, n.asyncValidator))
          : "function" == typeof r && i.setAsyncValidators([r]);
        const o = () => i.updateValueAndValidity();
        X(n._rawValidators, o), X(n._rawAsyncValidators, o);
      }
      function bt(i, n) {
        i._pendingDirty && i.markAsDirty(),
          i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(i._pendingValue),
          (i._pendingChange = !1);
      }
      const Un = { provide: _, useExisting: (0, t.Gpc)(() => F) },
        B = (() => Promise.resolve())();
      let F = (() => {
        class i extends _ {
          constructor(e, r, o) {
            super(),
              (this.callSetDisabledState = o),
              (this.submitted = !1),
              (this._directives = new Set()),
              (this.ngSubmit = new t.vpe()),
              (this.form = new _e({}, de(e), ue(r)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(e) {
            B.then(() => {
              const r = this._findContainer(e.path);
              (e.control = r.registerControl(e.name, e.control)),
                Z(e.control, e, this.callSetDisabledState),
                e.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.add(e);
            });
          }
          getControl(e) {
            return this.form.get(e.path);
          }
          removeControl(e) {
            B.then(() => {
              const r = this._findContainer(e.path);
              r && r.removeControl(e.name), this._directives.delete(e);
            });
          }
          addFormGroup(e) {
            B.then(() => {
              const r = this._findContainer(e.path),
                o = new _e({});
              (function Mt(i, n) {
                ye(i, n);
              })(o, e),
                r.registerControl(e.name, o),
                o.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(e) {
            B.then(() => {
              const r = this._findContainer(e.path);
              r && r.removeControl(e.name);
            });
          }
          getFormGroup(e) {
            return this.form.get(e.path);
          }
          updateModel(e, r) {
            B.then(() => {
              this.form.get(e.path).setValue(r);
            });
          }
          setValue(e) {
            this.control.setValue(e);
          }
          onSubmit(e) {
            return (
              (this.submitted = !0),
              (function Ct(i, n) {
                i._syncPendingControls(),
                  n.forEach((e) => {
                    const r = e.control;
                    "submit" === r.updateOn &&
                      r._pendingChange &&
                      (e.viewToModelUpdate(r._pendingValue),
                      (r._pendingChange = !1));
                  });
              })(this.form, this._directives),
              this.ngSubmit.emit(e),
              "dialog" === e?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(e = void 0) {
            this.form.reset(e), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(e) {
            return e.pop(), e.length ? this.form.get(e) : this.form;
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(t.Y36(m, 10), t.Y36(A, 10), t.Y36(z, 8));
          }),
          (i.ɵdir = t.lG2({
            type: i,
            selectors: [
              ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
              ["ng-form"],
              ["", "ngForm", ""],
            ],
            hostBindings: function (e, r) {
              1 & e &&
                t.NdJ("submit", function (s) {
                  return r.onSubmit(s);
                })("reset", function () {
                  return r.onReset();
                });
            },
            inputs: { options: ["ngFormOptions", "options"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [t._Bn([Un]), t.qOj],
          })),
          i
        );
      })();
      function kt(i, n) {
        const e = i.indexOf(n);
        e > -1 && i.splice(e, 1);
      }
      function wt(i) {
        return (
          "object" == typeof i &&
          null !== i &&
          2 === Object.keys(i).length &&
          "value" in i &&
          "disabled" in i
        );
      }
      const Dt = class extends vt {
          constructor(n = null, e, r) {
            super(fe(e), me(r, e)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(n),
              this._setUpdateStrategy(e),
              this._initObservables(),
              this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
              }),
              Y(e) &&
                (e.nonNullable || e.initialValueIsDefault) &&
                (this.defaultValue = wt(n) ? n.value : n);
          }
          setValue(n, e = {}) {
            (this.value = this._pendingValue = n),
              this._onChange.length &&
                !1 !== e.emitModelToViewChange &&
                this._onChange.forEach((r) =>
                  r(this.value, !1 !== e.emitViewToModelChange)
                ),
              this.updateValueAndValidity(e);
          }
          patchValue(n, e = {}) {
            this.setValue(n, e);
          }
          reset(n = this.defaultValue, e = {}) {
            this._applyFormState(n),
              this.markAsPristine(e),
              this.markAsUntouched(e),
              this.setValue(this.value, e),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(n) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(n) {
            this._onChange.push(n);
          }
          _unregisterOnChange(n) {
            kt(this._onChange, n);
          }
          registerOnDisabledChange(n) {
            this._onDisabledChange.push(n);
          }
          _unregisterOnDisabledChange(n) {
            kt(this._onDisabledChange, n);
          }
          _forEachChild(n) {}
          _syncPendingControls() {
            return !(
              "submit" !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1,
              }),
              0)
            );
          }
          _applyFormState(n) {
            wt(n)
              ? ((this.value = this._pendingValue = n.value),
                n.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = n);
          }
        },
        Hn = { provide: V, useExisting: (0, t.Gpc)(() => Ce) },
        Et = (() => Promise.resolve())();
      let Ce = (() => {
          class i extends V {
            constructor(e, r, o, s, a, l) {
              super(),
                (this._changeDetectorRef = a),
                (this.callSetDisabledState = l),
                (this.control = new Dt()),
                (this._registered = !1),
                (this.name = ""),
                (this.update = new t.vpe()),
                (this._parent = e),
                this._setValidators(r),
                this._setAsyncValidators(o),
                (this.valueAccessor = (function Me(i, n) {
                  if (!n) return null;
                  let e, r, o;
                  return (
                    Array.isArray(n),
                    n.forEach((s) => {
                      s.constructor === ce
                        ? (e = s)
                        : (function Zn(i) {
                            return Object.getPrototypeOf(i.constructor) === I;
                          })(s)
                        ? (r = s)
                        : (o = s);
                    }),
                    o || r || e || null
                  );
                })(0, s));
            }
            ngOnChanges(e) {
              if ((this._checkForErrors(), !this._registered || "name" in e)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const r = e.name.previousValue;
                  this.formDirective.removeControl({
                    name: r,
                    path: this._getPath(r),
                  });
                }
                this._setUpControl();
              }
              "isDisabled" in e && this._updateDisabled(e),
                (function be(i, n) {
                  if (!i.hasOwnProperty("model")) return !1;
                  const e = i.model;
                  return !!e.isFirstChange() || !Object.is(n, e.currentValue);
                })(e, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(e) {
              (this.viewModel = e), this.update.emit(e);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              Z(this.control, this, this.callSetDisabledState),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(e) {
              Et.then(() => {
                this.control.setValue(e, { emitViewToModelChange: !1 }),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(e) {
              const r = e.isDisabled.currentValue,
                o = 0 !== r && (0, t.D6c)(r);
              Et.then(() => {
                o && !this.control.disabled
                  ? this.control.disable()
                  : !o && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(e) {
              return this._parent
                ? (function J(i, n) {
                    return [...n.path, i];
                  })(e, this._parent)
                : [e];
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(
                t.Y36(_, 9),
                t.Y36(m, 10),
                t.Y36(A, 10),
                t.Y36(M, 10),
                t.Y36(t.sBO, 8),
                t.Y36(z, 8)
              );
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [t._Bn([Hn]), t.qOj, t.TTD],
            })),
            i
          );
        })(),
        St = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            i
          );
        })(),
        Ot = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({})),
            i
          );
        })(),
        mr = (() => {
          class i {}
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({ imports: [Ot] })),
            i
          );
        })(),
        yr = (() => {
          class i {
            static withConfig(e) {
              return {
                ngModule: i,
                providers: [
                  { provide: z, useValue: e.callSetDisabledState ?? W },
                ],
              };
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵmod = t.oAB({ type: i })),
            (i.ɵinj = t.cJS({ imports: [mr] })),
            i
          );
        })(),
        vr = (() => {
          class i {
            constructor() {
              (this.ngForm = (0, t.f3M)(F, { self: !0 })),
                (this.onChange = this.ngForm.form.valueChanges);
            }
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵdir = t.lG2({
              type: i,
              selectors: [["form"]],
              outputs: { onChange: "onChange" },
              standalone: !0,
              features: [t._Bn([F])],
            })),
            i
          );
        })(),
        br = (() => {
          class i {
            constructor(e) {
              (this.googleMapService = e),
                (this.$mapForm = this.googleMapService.$mapFilters),
                (this.onChange = new t.vpe()),
                (0, t.cEC)(
                  () => {
                    const r = this.$mapForm();
                    this.onChange.emit(r);
                  },
                  { allowSignalWrites: !0 }
                );
            }
            ngOnInit() {}
          }
          return (
            (i.ɵfac = function (e) {
              return new (e || i)(t.Y36(U));
            }),
            (i.ɵcmp = t.Xpm({
              type: i,
              selectors: [["map-form"]],
              outputs: { onChange: "onChange" },
              standalone: !0,
              features: [t.jDz],
              decls: 32,
              vars: 6,
              consts: [
                [3, "onChange"],
                [1, "list-group", "shadow-sm"],
                [1, "list-group-item"],
                [1, "pb-2"],
                [1, "form-check"],
                [
                  "type",
                  "checkbox",
                  "name",
                  "parksEmblematics",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "parksEmblematics",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
                [
                  "type",
                  "checkbox",
                  "name",
                  "parksRegulars",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "parksRegulars",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
                [
                  "type",
                  "checkbox",
                  "name",
                  "parksEva",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "parksEva",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
                [
                  "type",
                  "checkbox",
                  "name",
                  "parksNewOrRestored",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "parksNewOrRestored",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
                [
                  "type",
                  "checkbox",
                  "name",
                  "bikelanes2023",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "bikelanes2023",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
                [
                  "type",
                  "checkbox",
                  "name",
                  "bikelanes2022",
                  1,
                  "form-check-input",
                  3,
                  "ngModel",
                ],
                [
                  "for",
                  "bikelanes2022",
                  1,
                  "form-check-label",
                  "pe-2",
                  "cursor-pointer",
                  "prevent-select",
                ],
              ],
              template: function (e, r) {
                1 & e &&
                  (t.TgZ(0, "form", 0),
                  t.NdJ("onChange", function (s) {
                    return r.$mapForm.set(s);
                  }),
                  t.TgZ(1, "ul", 1)(2, "li", 2)(3, "div", 3),
                  t._uU(4, "Parques"),
                  t.qZA(),
                  t.TgZ(5, "div", 4),
                  t._UZ(6, "input", 5),
                  t.TgZ(7, "label", 6),
                  t._uU(8, " Emblematicos "),
                  t.qZA()(),
                  t.TgZ(9, "div", 4),
                  t._UZ(10, "input", 7),
                  t.TgZ(11, "label", 8),
                  t._uU(12, " Regulares "),
                  t.qZA()(),
                  t.TgZ(13, "div", 4),
                  t._UZ(14, "input", 9),
                  t.TgZ(15, "label", 10),
                  t._uU(16, " Evaluados con Eva "),
                  t.qZA()(),
                  t.TgZ(17, "div", 4),
                  t._UZ(18, "input", 11),
                  t.TgZ(19, "label", 12),
                  t._uU(20, " Nuevos y Rehabilitados "),
                  t.qZA()()(),
                  t.TgZ(21, "li", 2)(22, "div", 3),
                  t._uU(23, "Ciclov\xedas"),
                  t.qZA(),
                  t.TgZ(24, "div", 4),
                  t._UZ(25, "input", 13),
                  t.TgZ(26, "label", 14),
                  t._uU(27, " 2023 "),
                  t.qZA()(),
                  t.TgZ(28, "div", 4),
                  t._UZ(29, "input", 15),
                  t.TgZ(30, "label", 16),
                  t._uU(31, " 2022 "),
                  t.qZA()()()()()),
                  2 & e &&
                    (t.xp6(6),
                    t.Q6J("ngModel", r.$mapForm().parksEmblematics),
                    t.xp6(4),
                    t.Q6J("ngModel", r.$mapForm().parksRegulars),
                    t.xp6(4),
                    t.Q6J("ngModel", r.$mapForm().parksEva),
                    t.xp6(4),
                    t.Q6J("ngModel", r.$mapForm().parksNewOrRestored),
                    t.xp6(7),
                    t.Q6J("ngModel", r.$mapForm().bikelanes2023),
                    t.xp6(4),
                    t.Q6J("ngModel", r.$mapForm().bikelanes2022));
              },
              dependencies: [p.ez, yr, St, le, pt, ft, Ce, F, vr],
              encapsulation: 2,
            })),
            i
          );
        })();
      class kr extends Error {
        constructor(n, e) {
          super(
            (function wr(i, n) {
              return `NG0${Math.abs(i)}${n ? ": " + n : ""}`;
            })(n, e)
          ),
            (this.code = n);
        }
      }
      function ei(i, n) {
        const e = !n?.manualCleanup;
        e && !n?.injector && (0, t.gHi)(ei);
        const r = e ? n?.injector?.get(t.ktI) ?? (0, t.f3M)(t.ktI) : null;
        let o;
        o = (0, t.tdS)(
          n?.requireSync ? { kind: 0 } : { kind: 1, value: n?.initialValue }
        );
        const s = i.subscribe({
          next: (a) => o.set({ kind: 1, value: a }),
          error: (a) => o.set({ kind: 2, error: a }),
        });
        return (
          r?.onDestroy(s.unsubscribe.bind(s)),
          (0, t.Flj)(() => {
            const a = o();
            switch (a.kind) {
              case 1:
                return a.value;
              case 2:
                throw a.error;
              case 0:
                throw new kr(
                  601,
                  "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously."
                );
            }
          })
        );
      }
      var ti = d(8785);
      function Or(i, n) {
        1 & i && t._UZ(0, "app-sidebar-component");
      }
      function xr(i, n) {
        1 & i && t._UZ(0, "app-bikelane-sidebar-component");
      }
      function zr(i, n) {
        if (
          (1 & i &&
            (t.TgZ(0, "div", 10),
            t.YNc(1, Or, 1, 0, "app-sidebar-component", 11),
            t.YNc(2, xr, 1, 0, "app-bikelane-sidebar-component", 11),
            t.qZA()),
          2 & i)
        ) {
          const e = t.oxw(2);
          t.xp6(1),
            t.Q6J("ngIf", 0 !== e.$selectedPark().id),
            t.xp6(1),
            t.Q6J("ngIf", "" !== e.$selectedBikelane().code);
        }
      }
      function Fr(i, n) {
        if (1 & i) {
          const e = t.EpF();
          t.TgZ(0, "map-polyline", 12),
            t.NdJ("polylineClick", function () {
              const s = t.CHM(e).$implicit,
                a = t.oxw(2);
              return t.KtG(a.onSelectBikelane(s.bikelane));
            }),
            t.qZA();
        }
        if (2 & i) {
          const e = n.$implicit;
          t.Q6J("path", e.path)("options", e.options);
        }
      }
      const ii = function (i) {
        return { zIndex: i };
      };
      function Pr(i, n) {
        if (1 & i) {
          const e = t.EpF();
          t.TgZ(0, "map-marker", 13),
            t.NdJ("mapClick", function () {
              const s = t.CHM(e).$implicit,
                a = t.oxw(2);
              return t.KtG(a.onSelectBikelane(s.bikelane));
            }),
            t.qZA();
        }
        if (2 & i) {
          const e = n.$implicit;
          t.Q6J("position", e.marker.position)("title", e.marker.title)(
            "icon",
            e.marker.icon
          )("options", t.VKq(4, ii, e.marker.zIndex));
        }
      }
      function Tr(i, n) {
        if (1 & i) {
          const e = t.EpF();
          t.TgZ(0, "map-marker", 13),
            t.NdJ("mapClick", function () {
              const s = t.CHM(e).$implicit,
                a = t.oxw(2);
              return t.KtG(a.onSelectPark(s.park));
            }),
            t.qZA();
        }
        if (2 & i) {
          const e = n.$implicit;
          t.Q6J("position", e.position)("title", e.title)("icon", e.icon)(
            "options",
            t.VKq(4, ii, e.zIndex)
          );
        }
      }
      function Nr(i, n) {
        if (1 & i) {
          const e = t.EpF();
          t.TgZ(0, "div", 1)(1, "div", 2),
            t.YNc(2, zr, 3, 2, "div", 3),
            t.TgZ(3, "div", 4)(4, "div", 5),
            t._UZ(5, "map-form"),
            t.qZA(),
            t.TgZ(6, "google-map", 6, 7),
            t.NdJ("tilesloaded", function () {
              t.CHM(e);
              const o = t.oxw();
              return t.KtG(!o.mapRendered$.value && o.mapRendered$.next(!0));
            }),
            t.YNc(8, Fr, 1, 2, "map-polyline", 8),
            t.YNc(9, Pr, 1, 6, "map-marker", 9),
            t.YNc(10, Tr, 1, 6, "map-marker", 9),
            t.qZA()()()();
        }
        if (2 & i) {
          const e = t.oxw();
          t.xp6(2),
            t.Q6J(
              "ngIf",
              0 !== e.$selectedPark().id || "" !== e.$selectedBikelane().code
            ),
            t.xp6(4),
            t.Q6J("options", e.mapConfig.options)("center", e.mapConfig.center)(
              "zoom",
              e.mapConfig.zoom
            ),
            t.xp6(2),
            t.Q6J("ngForOf", e.$parsedBikelanes()),
            t.xp6(1),
            t.Q6J("ngForOf", e.$parsedBikelanes()),
            t.xp6(1),
            t.Q6J("ngForOf", e.$parsedParks());
        }
      }
      const Lr = (() => {
        class i {
          constructor(e, r, o, s, a) {
            (this.googleMapService = e),
              (this.bikelaneService = r),
              (this.parkService = o),
              (this.route = s),
              (this.router = a),
              (this.$selectedPark = this.parkService.$selectedPark),
              (this.$filteredParks = this.parkService.$filteredParks),
              (this.$selectedBikelane = this.bikelaneService.$selectedBikelane),
              (this.$filteredBikelanes =
                this.bikelaneService.$filteredBikelanes),
              (this.$mapFilters = this.googleMapService.$mapFilters),
              (this.$mapLoaded = ei(this.googleMapService.loaded())),
              (this.getGoogleClusterInlineSvg = function (l) {
                return (
                  "data:image/svg+xml;base64," +
                  window.btoa(
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.7"/><path d="M0 67A67 67 0 0 0 67 0L81 0A81 81 0 0 1 0 81Z" fill-opacity="0.5"/><path d="M0 86A86 86 0 0 0 86 0L100 0A100 100 0 0 1 0 100Z" fill-opacity="0.3"/></g></defs><g fill="' +
                      l +
                      '"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>'
                  )
                );
              }),
              (this.mapRendered$ = new h.X(!1)),
              (this.markerClustererImagePath =
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"),
              (this.markerClustererOptions = {}),
              (this.mapConfig = {
                zoom: 11,
                center: { lat: 25.686614, lng: -100.316113 },
                options: {
                  streetViewControl: !1,
                  mapTypeControl: !1,
                  fullscreenControl: !1,
                  clickableIcons: !1,
                  styles: [
                    { featureType: "poi", stylers: [{ visibility: "off" }] },
                    {
                      featureType: "transit",
                      stylers: [{ visibility: "off" }],
                    },
                    {
                      featureType: "road",
                      elementType: "labels",
                      stylers: [{ visibility: "off" }],
                    },
                  ],
                },
              }),
              (this.$parsedBikelanes = (0, t.Flj)(() => {
                const l = this.$filteredBikelanes();
                return (
                  console.log(`${l.length} bikelanes loaded`),
                  l.map((c) => {
                    const u = c.coordinates.map((y) => ({
                      lat: y[1],
                      lng: y[0],
                    }));
                    return {
                      marker: {
                        zIndex: 100,
                        position: { lat: u[0].lat, lng: u[0].lng },
                        title: c.name,
                        icon: {
                          url: "./assets/images/marker_bikelane.png",
                          scaledSize: new google.maps.Size(20, 30),
                        },
                      },
                      bikelane: c,
                      path: u,
                      options: {
                        strokeColor: "#7e34c3",
                        strokeOpacity: 0,
                        icons: [
                          {
                            icon: {
                              path: "M 0, -1 0, 1",
                              strokeOpacity: 1,
                              scale: 3,
                            },
                            offset: "0",
                            repeat: "12px",
                          },
                        ],
                      },
                    };
                  })
                );
              })),
              (this.$parsedParks = (0, t.Flj)(() => {
                const l = this.$filteredParks();
                return (
                  console.log(`${l.length} parks loaded`),
                  l
                    .filter((c) => null != c.location.lat)
                    .sort((c, u) =>
                      c.location.lat && u.location.lat
                        ? c.location.lat < u.location.lat
                          ? 1
                          : c.location.lat > u.location.lat
                          ? -1
                          : 0
                        : 0
                    )
                    .map((c) => {
                      const u = c.isEmblematic
                        ? new google.maps.Size(20, 30)
                        : new google.maps.Size(15, 22);
                      let v = "./assets/images/marker_park.png";
                      c.isNewOrRestored &&
                        (v = "./assets/images/marker_eva.png"),
                        c.isEmblematic && (v = "./assets/images/marker.png");
                      let y = 1;
                      return (
                        c.isNewOrRestored && (y = 2),
                        c.isEmblematic && (y = 3),
                        {
                          park: c,
                          zIndex: y,
                          position: {
                            lat: c.location.lat || -0,
                            lng: c.location.lng || 0,
                          },
                          title: c.name,
                          icon: { url: v, scaledSize: u },
                        }
                      );
                    })
                );
              }));
          }
          ngOnInit() {
            this.googleMapService.load(),
              this.parkService.fetchParks(),
              this.bikelaneService.fetchBikelanes(),
              (0, E.a)([
                this.googleMapService.loaded(),
                this.route.queryParams,
                this.mapRendered$,
              ]).subscribe(([e, r, o]) => {
                if (e && o && r.id && r.type)
                  switch (r.type) {
                    case "bikelane":
                      this.selectBikelane(r.id);
                      break;
                    case "park":
                      this.selectPark(Number(r.id));
                  }
              });
          }
          onSelectPark(e) {
            this.router.navigate(["/"], {
              queryParams: { id: e.id, type: "park" },
            });
          }
          onSelectBikelane(e) {
            this.router.navigate(["/"], {
              queryParams: { id: e.id, type: "bikelane" },
            });
          }
          selectPark(e) {
            const r = this.$filteredParks().find((s) => s.id === e) || N;
            this.bikelaneService.deselectBikelane(),
              this.parkService.selectPark(r.id),
              this.map.panTo(r.location);
          }
          selectBikelane(e, r = null) {
            const o = this.$filteredBikelanes().find((c) => c.id === e) || T;
            this.parkService.deselectPark(),
              this.bikelaneService.selectBikelane(o.id),
              this.map.panTo({
                lat: o.coordinates[0][1],
                lng: o.coordinates[0][0],
              });
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              t.Y36(U),
              t.Y36(Fe),
              t.Y36(Pe),
              t.Y36(ti.gz),
              t.Y36(ti.F0)
            );
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["app-index-page"]],
            viewQuery: function (e, r) {
              if ((1 & e && t.Gf(f, 5), 2 & e)) {
                let o;
                t.iGM((o = t.CRH())) && (r.map = o.first);
              }
            },
            standalone: !0,
            features: [t.jDz],
            decls: 1,
            vars: 1,
            consts: [
              ["class", "container-fluid g-0", 4, "ngIf"],
              [1, "container-fluid", "g-0"],
              [1, "row", "g-0"],
              ["class", "col-xs-auto", "style", "width: 350px", 4, "ngIf"],
              [1, "col"],
              ["id", "layer-selector"],
              [
                "height",
                "100vh",
                "width",
                "100%",
                3,
                "options",
                "center",
                "zoom",
                "tilesloaded",
              ],
              ["map", ""],
              [3, "path", "options", "polylineClick", 4, "ngFor", "ngForOf"],
              [
                3,
                "position",
                "title",
                "icon",
                "options",
                "mapClick",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "col-xs-auto", 2, "width", "350px"],
              [4, "ngIf"],
              [3, "path", "options", "polylineClick"],
              [3, "position", "title", "icon", "options", "mapClick"],
            ],
            template: function (e, r) {
              1 & e && t.YNc(0, Nr, 11, 7, "div", 0),
                2 & e && t.Q6J("ngIf", r.$mapLoaded());
            },
            dependencies: [mi, Wi, mn, f, ae, Ue, br, p.ez, p.sg, p.O5],
            styles: [
              "#layer-selector[_ngcontent-%COMP%]{position:absolute;z-index:2;right:10px;top:10px;width:154px}",
            ],
          })),
          i
        );
      })();
    },
  },
]);
