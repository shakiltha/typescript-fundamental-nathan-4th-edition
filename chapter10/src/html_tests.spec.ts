import $ from "jquery";

function setTestDiv(text: string) {
  $("#test_div").html(`<p>${text}</p>`);
}

describe("html_test", () => {
  it("should set text on div", () => {
    document.body.innerHTML = `<div id="test_div></div>`;

    let htmlElement = $("#test_div");
    expect(htmlElement.length).toBeGreaterThan(0);
    setTestDiv("hello world");
    expect(htmlElement.html()).toContain("hello world");
  });
});

import { JSDOM } from "jsdom";

const htmlWithClickEvent = `
<body>
  <script type="text/javascript">
    function handle_click_event() {
      console.log("handle_click_event() called.");
    }
  </script>
  <div id="click_handler_div">
    Click here
  </div>
</body>
`;

it("should trigger an onclick dom event", () => {
  let dom = new JSDOM(htmlWithClickEvent, { runScripts: "dangerously" });

  let clickHandler = <HTMLElement>(
    dom.window.document.querySelector("#click_handler_div")
  );
  let clickEventSpy = jest.spyOn(clickHandler, "click");
  clickHandler.click();
  expect(clickEventSpy).toHaveBeenCalled();
});
