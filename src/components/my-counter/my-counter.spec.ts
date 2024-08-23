// @vitest-environment nuxt
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MyCounter from "./my-counter.vue";

describe("MyCounter", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(MyCounter);
    expect(wrapper.vm).toBeTruthy();
  });
});
