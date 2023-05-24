import React from 'react';

export const InfoContents = {
  pageInfo: {
    kor: '이 페이지는 니어 웹사이트의 지갑을 개인용 지갑으로 옮기기 위한 안내 페이지입니다.',
    eng: 'This page is a guide for moving your NEAR account to a personal wallet from the web wallet.',
  },
  nearInfo: {
    title: {
      kor: '기존 Web Wallet에서 지원하는 지갑 이동 방식',
      eng: 'The way existing NEAR web wallet moves your account',
    },
    desc: {
      kor: (
        <>
          <b>
            <u>불편한 점이 무엇인가요?</u>
          </b>
          <br />
          {/* 계정 별로 새롭게 니모닉을 생성하는 것은 불필요하며,
          <br />
          사용자가 이를 모두 안전하게 관리해야 한다는 점에서 <b>부담이 늘어납니다.</b> */}
          계정 별로 새로운 니모닉을 이용하여 Full access key를 생성하고 추가하지만, Private key를
          이용해서 임포트하기 때문에 이전된 지갑에서는 <b>니모닉을 사용할 수 없습니다.</b>
        </>
      ),
      eng: (
        <>
          <b>
            <u>What is uncomfortable about it?</u>
          </b>
          <br />
          {/* Creating a new mnemonic for each account is unnecessary, but
          <br /> it still <b>adds to the burden</b> that users must manage it all securely */}
          Creating and adding a full access key using a new mnemonic for each account, but the new
          wallet <b>cannot use the mnemonic</b> because it imports accounts using private key.
        </>
      ),
    },
    guide: {
      kor: (
        <>
          1. 새로운 니모닉을 통해서 Access Key를 생성한다.
          <br />
          2. 생성한 Access Key를 이전하고자 하는 계정에 Full Access Key로 등록한다.
          <br />
          3. 기존 계정의 Full Access Key를 삭제한다.
          <br />
          4. Full Access Key로 등록된 Access Key의 Private Key를 이용하여 지갑에 계정을 임포트한다.
        </>
      ),
      eng: (
        <>
          1. Create an Access Key through a new mnemonic.
          <br />
          2. Register the generated Access Key as a Full Access Key to the account you want to
          transfer.
          <br />
          3. Remove old Full Access Keys.
          <br />
          4. Import account to wallet using Private key of new Full Access Key
        </>
      ),
    },
  },
  welldoneInfo: {
    title: {
      kor: 'NEAR Migration Helper의 지갑 이동 방식',
      eng: 'The way NEAR Migration Helper moves your account',
    },
    desc: {
      kor: (
        <>
          <b>
            <u>더 편한 점이 무엇인가요?</u>
          </b>
          <br />
          {/* 하나의 니모닉에서 HD Path를 이용해 계정들을 생성하기 때문에,
          <br /> 니모닉을 새로 생성하는 과정의 부담이 전혀 없으며 <b>더욱 간편합니다.</b> */}
          이전 대상이 되는 지갑에서 Full access key를 생성하기 때문에 <br />
          <b>Private key와 니모닉을 모두 사용</b>해서 계정을 관리할 수 있습니다.
        </>
      ),
      eng: (
        <>
          <b>
            <u>What is more comfortable about it?</u>
          </b>
          <br />
          {/* By creating accounts using HD Path in one mnemonic,
          <br /> There is no burden in creating a new mnemonic and <b>it is simpler.</b> */}
          Because creating a full access key from the wallet where you want to move your accounts,
          you can manage your accounts using both your <b>private key and mnemonic</b>.
        </>
      ),
    },
    guide: {
      kor: (
        <>
          1. 니어 웹 지갑에서 옮기고자 하는 계정과 연결한다.
          <br />
          2. 이전 대상이 될 새로운 지갑에서 Implicit account를 생성한다. <br />
          3. 생성된 Implicit account의 ID 혹은 Public Key를 복사한다.
          <br />
          4. NEAR Migration Helper에, 복사한 Public Key를 입력하고*, Set 버튼을 누른다.
          <br />
          5. 오류가 없을 시 등장하는 Add Full Access Key 버튼을 누른다.
          <br />
          6. 새로운 지갑을 열고, 옮기고자 하는 계정이 추가됐는지 확인한다**.
        </>
      ),
      eng: (
        <>
          1. Connect to NEAR web wallet with the account you want to migrate. <br />
          2. Create an Implicit account from a new wallet that will be transferred. <br />
          3. Please copy the ID or Public Key of the generated Implicit account.
          <br />
          4. In the NEAR Migration Helper, type the copied Public Key* and press the Set button.
          <br />
          5. If there is no error, press the Full access key button that appears.
          <br />
          6. Open a new wallet and check if the account you want to move has been added**.
        </>
      ),
    },
    comment: {
      kor: (
        <>
          보안을 위해 기존의 니어 웹 지갑에서 사용하던 Full Access Key를 삭제하는 것을 권장합니다.{' '}
          <br />
          *: 입력값에 Implicit account의 ID를 사용하는 것도 가능합니다.
          <br />
          **: 지갑에 따라 Import Account를 다시 진행해야 할 수도 있습니다.
        </>
      ),
      eng: (
        <>
          WELLDONE Studio recommends you to delete the full access key that was previously used in
          the web wallet. <br />
          *: You can also use the ID of the Implicit account for the input value.
          <br /> **: Depending on your wallet, you may need to proceed with your import account
          again.
        </>
      ),
    },
  },
  bottom: {
    comment: {
      kor: 'NEAR Migration Helper 사용을 위한',
      eng: 'To use NEAR Migration Helper',
    },
    button: {
      kor: '니어 지갑 연결하기',
      eng: 'Connect NEAR Wallet',
    },
  },
  blurbox: {
    kor: '클릭해서 월렛 이전 과정의 차이점 알아보기',
    eng: 'Click and check the difference between the Wallet migration process',
  },
};
