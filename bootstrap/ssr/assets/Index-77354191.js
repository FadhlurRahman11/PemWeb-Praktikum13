import { unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-34aa3109.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-a13ec695.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: Array
  },
  setup(__props) {
    const form = useForm({});
    function destroy(id) {
      if (confirm("Are you sure you want to Delete")) {
        form.delete(route("posts.destroy", id));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Posts" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Posts</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Posts")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6"${_scopeId}><div class="p-4 sm:p-4 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("posts.create"),
              as: "button",
              class: "mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tambah `);
                } else {
                  return [
                    createTextVNode(" Tambah ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>No</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Judul</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Kategori</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Konten</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Tgl Terbit</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Penulis</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Aksi</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.posts, (post) => {
              _push2(`<tr${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.id)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.judul)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.kategori)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.konten)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.creted_at)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(post.penulis)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="flex items-center"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("posts.edit", post.id))} class="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"${_scopeId}>Edit </a><button tabIndex="-1" type="button" className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"${_scopeId}>Hapus</button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-4 bg-white shadow sm:rounded-lg" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("posts.create"),
                      as: "button",
                      class: "mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Tambah ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "No"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Judul"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Kategori"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Konten"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Tgl Terbit"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Penulis"),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, "Aksi")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post) => {
                          return openBlock(), createBlock("tr", {
                            key: post.posts
                          }, [
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.id), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.judul), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.kategori), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.konten), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.creted_at), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(post.penulis), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("a", {
                                  href: _ctx.route("posts.edit", post.id),
                                  class: "mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                }, "Edit ", 8, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => destroy(post.id),
                                  tabIndex: "-1",
                                  type: "button",
                                  className: "mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                }, "Hapus", 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
