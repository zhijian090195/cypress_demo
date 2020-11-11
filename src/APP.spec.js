describe("測試", () => {
  //測試三組數值輸出角度是否正確
  before(() => {
    //進入測試頁面
    cy.visit("/");
  });
  it("測試第一組數值輸出角度是否正確", () => {
    cy.get("#input_width").type("30");
    cy.get("#input_distance").type("9.5");
    cy.get("#calculate").click();
    cy.get("#degree").contains(28);
  });
});
describe("測試2", () => {
  //測試三組數值輸出角度是否正確
  before(() => {
    //進入測試頁面
    cy.visit("/");
  });
  it("測試第二組數值輸出角度是否正確", () => {
    cy.get("#input_width").type("46");
    cy.get("#input_distance").type("14.1");
    cy.get("#calculate").click();
    cy.get("#degree").contains(27);
  });
});
describe("測試3", () => {
  //測試三組數值輸出角度是否正確
  before(() => {
    //進入測試頁面
    cy.visit("/");
  });
  it("測試第三組數值輸出角度是否正確", () => {
    cy.get("#input_width").type("66");
    cy.get("#input_distance").type("40.1");
    cy.get("#calculate").click();
    cy.get("#degree").contains(47);
  });
});
