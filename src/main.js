import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Heinrich Lindner",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Pipelines, long feedback cycles, magic 'deploy' buttons"],
    // Which CI/CD tools do you use in your project?
    tools: "Gitlab pipelines",
    // What do you want to learn in this workshop?
    expectations: ["How CI/CD works in the background"],
  },
});
