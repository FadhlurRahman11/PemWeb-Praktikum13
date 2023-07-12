import { resolveComponent, withCtx, createVNode, unref, createTextVNode, withModifiers, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-34aa3109.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./TextInput-ff4c81ac.js";
import { P as PrimaryButton } from "./PrimaryButton-d82933f3.js";
import { useForm } from "@inertiajs/vue3";
import "./ApplicationLogo-a13ec695.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    },
    post: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      judul: props.post.judul,
      kategori: props.post.kategori,
      konten: props.post.konten,
      penulis: props.post.penulis
    });
    const submit = () => {
      form.put(route("posts.update", props.post.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Posts" }, null, _parent));
      _push(ssrRenderComponent(AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Add Posts</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Add Posts")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}><form name="createForm" class="mt-6 space-y-6"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "judul",
              value: "Judul"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "judul",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).judul,
              "onUpdate:modelValue": ($event) => unref(form).judul = $event,
              required: "",
              autofocus: "",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.judul
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "kategori",
              value: "kategori"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "kategori",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).kategori,
              "onUpdate:modelValue": ($event) => unref(form).kategori = $event,
              required: "",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.kategori
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "konten",
              value: "konten"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "konten",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).konten,
              "onUpdate:modelValue": ($event) => unref(form).konten = $event,
              required: "",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.konten
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "penulis",
              value: "penulis"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "konten",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).penulis,
              "onUpdate:modelValue": ($event) => unref(form).penulis = $event,
              required: "",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.penulis
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).recentlySuccessful) {
              _push2(`<p class="text-sm text-gray-600"${_scopeId}>Saved.</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode("form", {
                      name: "createForm",
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "mt-6 space-y-6"
                    }, [
                      createVNode("div", null, [
                        createVNode(_sfc_main$1, {
                          for: "judul",
                          value: "Judul"
                        }),
                        createVNode(_sfc_main$2, {
                          id: "judul",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).judul,
                          "onUpdate:modelValue": ($event) => unref(form).judul = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$3, {
                          class: "mt-2",
                          message: unref(form).errors.judul
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$1, {
                          for: "kategori",
                          value: "kategori"
                        }),
                        createVNode(_sfc_main$2, {
                          id: "kategori",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).kategori,
                          "onUpdate:modelValue": ($event) => unref(form).kategori = $event,
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$3, {
                          class: "mt-2",
                          message: unref(form).errors.kategori
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$1, {
                          for: "konten",
                          value: "konten"
                        }),
                        createVNode(_sfc_main$2, {
                          id: "konten",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).konten,
                          "onUpdate:modelValue": ($event) => unref(form).konten = $event,
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$3, {
                          class: "mt-2",
                          message: unref(form).errors.konten
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$1, {
                          for: "penulis",
                          value: "penulis"
                        }),
                        createVNode(_sfc_main$2, {
                          id: "konten",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).penulis,
                          "onUpdate:modelValue": ($event) => unref(form).penulis = $event,
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$3, {
                          class: "mt-2",
                          message: unref(form).errors.penulis
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(PrimaryButton, {
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(Transition, {
                          "enter-from-class": "opacity-0",
                          "leave-to-class": "opacity-0",
                          class: "transition ease-in-out"
                        }, {
                          default: withCtx(() => [
                            unref(form).recentlySuccessful ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm text-gray-600"
                            }, "Saved.")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
