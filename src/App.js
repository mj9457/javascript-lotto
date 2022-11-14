const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  randomSixNumberArr = [];

  play() {
    this.inputOfLottoPurchaseAmount();
  }

  inputOfLottoPurchaseAmount() {
    let countLotto;
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
      this.validationInputLottoPurchaseAmount(amountInput);
      countLotto = amountInput % 1000;
      this.printPurchaseCountMessage(countLotto);
      this.createRandomSixNumber(countLotto);
    });
  }

  validationInputLottoPurchaseAmount(amountInput) {
    const COUNT_LOTTO = amountInput % 1000
    if (amountInput < 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 음수가 될 수 없습니다.`);
    }

    if (amountInput < 1000) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원보다 작을 수 없습니다.`);
    }

    if (isNaN(amountInput)) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 숫자 이외의 값이 될 수 없습니다.`)
    }

    if (COUNT_LOTTO != 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원 단위로 나누어 떨어지지 않습니다.`)
    }
  }

  printPurchaseCountMessage(COUNT_LOTTO) {
    Console.print(`${COUNT_LOTTO}개를 구매했습니다.`);
  }

  createRandomSixNumber(COUNT_LOTTO) {
    for(let i=0; i<COUNT_LOTTO; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6)
      this.randomSixNumberArr.push(randomNumber);
      this.printRandomSixNumber();
    }
  }

  printRandomSixNumber() {
    Console.print(this.randomSixNumberArr);
  }
  
}

const app = new App();
app.play();

module.exports = App;
