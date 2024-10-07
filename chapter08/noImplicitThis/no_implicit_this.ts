class NoImplicitThisClass {
  id: number = 1;
  printAfterWait() {
    let callback = () => {
      console.log(`this.id : ${this.id}`);
    };
    setTimeout(callback, 1000);
  }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();
