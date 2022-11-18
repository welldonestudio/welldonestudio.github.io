import React from 'react';

export const InfoContents = {
  pageInfo: {
    kor: '이 페이지는 니어 웹사이트의 지갑을 개인용 지갑으로 옮기기 위한 안내 페이지입니다.',
    eng: 'This page is a guide for moving your Near account to a personal wallet from the web wallet.',
  },
  nearInfo: {
    title: {
      kor: '기존 Web Wallet에서 지원하는 지갑 이동 방식',
      eng: 'The way existing web wallet moves your Near account',
    },
    desc: {
      kor: (
        <>
          <b>
            <u>불편한 점이 무엇인가요?</u>
          </b>
          <br />
          계정 별로 새롭게 니모닉을 생성하는 것은 불필요하며,
          <br />
          사용자가 이를 모두 안전하게 관리해야 한다는 점에서 <b>부담이 늘어납니다.</b>
        </>
      ),
      eng: (
        <>
          <b>
            <u>What is uncomfortable about it?</u>
          </b>
          <br />
          Creating a new mnemonic for each account is unnecessary, but
          <br /> it still <b>adds to the burden</b> that users must manage it all securely
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
          3. Full Access Key로 등록된 Access Key의 Private Key를, 랜덤한 키를 사용해 암호화한다.
          <br />
          4. 암호화에 사용된 랜덤한 키 값을 사용자가 복사한다.
          <br />
          5. 이전하고자 하는 지갑의 콜백 페이지로 암호화된 Private Key 값을 전달한다.
          <br />
          6. 콜백 페이지에서 사용자는 앞서 복사한 키 값을 입력하여 암호화된 값을 복호화한다.
          <br />
          7. 복호화된 Private Key를 이용하여 이전하고자 하는 지갑에 계정을 임포트한다.
          <br />
          8. 다시 니어 웹 지갑 페이지로 돌아와 기존에 웹 지갑에서 사용하던 Full Access Key를
          삭제한다.
        </>
      ),
      eng: (
        <>
          1. Create an Access Key through a new mnemonic.
          <br />
          2. Register the generated Access Key as a Full Access Key to the account you want to
          transfer.
          <br /> 3. Encrypt the Private Key of the Access Key registered as a Full Access Key using
          a random key.
          <br /> 4. The user copies the random key value used for encryption.
          <br /> 5. The encrypted Private Key value is delivered to the callback page of the wallet
          to be transferred.
          <br /> 6. On the callback page, the user enters the previously copied key value to decrypt
          the encrypted value.
          <br /> 7. Use the decrypted private key to import the account into the wallet you want to
          transfer.
          <br /> 8. Return to the near web wallet page and delete the full access key that was
          previously used in the web wallet.
        </>
      ),
    },
  },
  welldoneInfo: {
    title: {
      kor: 'Near Migration Helper의 지갑 이동 방식',
      eng: 'The way Near Migration Helper moves your Near account',
    },
    desc: {
      kor: (
        <>
          <b>
            <u>더 편한 점이 무엇인가요?</u>
          </b>
          <br />
          하나의 니모닉에서 HD Path를 이용해 계정들을 생성하기 때문에,
          <br /> 니모닉을 새로 생성하는 과정의 부담이 전혀 없으며 <b>더욱 간편합니다.</b>
        </>
      ),
      eng: (
        <>
          <b>
            <u>What is more comfortable about it?</u>
          </b>
          <br />
          By creating accounts using HD Path in one mnemonic,
          <br /> There is no burden in creating a new mnemonic and <b>it is simpler.</b>
        </>
      ),
    },
    guide: {
      kor: (
        <>
          1. 자산을 이전할 기존의 니어 웹 지갑과 Near Migration Helper를 연결한다.
          <br />
          2. 이전 대상이 될 새로운 지갑에서 Implicit account를 생성한다. <br />
          3. 생성된 Implicit account의 ID 혹은 Public Key를 복사해 주세요.
          <br />
          4. Near Migration Helper에, 복사된 Public Key를 입력하고*, Set 버튼을 누른다.
          <br />
          5. 오류가 없을 시 등장하는 Full access key 버튼을 누른다.
          <br />
          6. 새로운 지갑을 열고, 이전 대상이 될 새로운 계정이 생성됐는지 확인한다**.
          <br />
          7. 기존의 니어 웹 지갑에서 사용하던 Full access key를 삭제한다.
        </>
      ),
      eng: (
        <>
          1. Connect the Near Migration Helper with the existing near web wallet to transfer assets.{' '}
          <br />
          2. Create an Implicit account from a new wallet that will be transferred. <br />
          3. Please copy the ID or Public Key of the generated Implicit account.
          <br />
          4. In the Near Migration Helper, type the copied Public Key* and press the Set button.
          <br />
          5. If there is no error, press the Full access key button that appears.
          <br />
          6. Open a new wallet and see if a new account has been created to be transferred**.
          <br />
          7. Delete the full access key that was previously used in the web wallet.
        </>
      ),
    },
    comment: {
      kor: (
        <>
          *: 입력값에 Implicit account의 ID를 사용하는 것도 가능합니다.
          <br />
          **: 지갑에 따라 Import Account를 다시 진행해야 할 수도 있습니다.
        </>
      ),
      eng: (
        <>
          *: You can also use the ID of the Implicit account for the input value.
          <br /> **: Depending on your wallet, you may need to proceed with your import account
          again.
        </>
      ),
    },
  },
  bottom: {
    comment: {
      kor: 'Near Migration Helper 사용을 위한',
      eng: 'To use Near Migration Helper',
    },
    button: {
      kor: '니어 지갑 연결하기',
      eng: 'Connect Near Wallet',
    },
  },
  blurbox: {
    kor: '클릭해서 월렛 이전 과정의 차이점 알아보기',
    eng: 'Click and check the difference between the Wallet migration process',
  },
};
