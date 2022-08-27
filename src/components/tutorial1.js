import * as React from "react";
// import '../css/tutorial.css';
import "../css/knowledge.css";

function Tutorial1Component(props) {
  return (
    <>
      <div className="container">
        <div className="knowledgeBody">
          <div className="title">
            <h1 data-selectable-paragraph="">
              <strong className="ce">
                Escrow SDK for exchange, gift, purchase item, purchase service
              </strong>
            </h1>
          </div>

          <div className="mainContent">
            <p>
              This is sdk to call actions of <i>easyescrow2</i> contract.
            </p>
            <p>
              Note:
              <i>
                I've deployed contract to account name of easyescrow2 both real
                net and test net.
              </i>
            </p>
            <p>
              <i>easyescrow2</i> contract has table to save escrow data and fee
              data and you can simply think it as mysql db. One is{" "}
              <i>escrows</i>, and other one is <i>fees</i>.
            </p>
            <p>
              <i>escrows</i> This table is to store escrow data and has columns
              of <i>escrowId</i>, <i>typeId</i>, <i>from</i>, <i>to</i>,{" "}
              <i>fromTokens</i>, <i>fromNfts</i>, <i>toTokens</i>, <i>toNfts</i>
              , <i>deliverType</i>, <i>expiry</i> .
            </p>
            <p>
              - <i>escrowId</i> This is primary key of table that are increasing
              automatically.
            </p>
            <p>
              - <i>typeId</i> This is to identify each escrow types. 1 for
              exchange, 2 for gift, 3 for purchase item, 4 for purchase service.
            </p>
            <p>
              - <i>from</i> This is name of user1 who is requesting escrow.
            </p>
            <p>
              - <i>to</i> This is name of user2.
            </p>
            <p>
              - <i>fromTokens</i> This is array of tokens that user1 want to
              spend. In our case length is 1 because we use only one token.
            </p>
            <p>
              - <i>fromNfts</i> This is array of NFTs that user1 want to spend.
              In our case just [] because we don't use NFT.
            </p>
            <p>
              - <i>toTokens</i> This is array of tokens that user1 wants to
              exchange with user2. In our case this is null except exchange
              escrow.
            </p>
            <p>
              - <i>toNFTs</i> This is [] because we don't use NFT.
            </p>
            <p>
              - <i>deliverType</i> This is to identify deliver type for purchase
              escrows. <i>1</i> for <i>immediately</i> way, <i>2</i> for
              <i>deliver</i> way. <i>0</i> for other escrows.
            </p>
            <p>
              <i>fees</i> This table is to store fee data of easyescrow2
              contract.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">fetchEscrowAll function</h1>
              </p>
              <p>This is a function to get table rows of a contract.</p>
            </div>
            <div className="subTitle">
              <p>
                <h1 id="b46f">fetchEscrows function</h1>
              </p>
              <p>
                This is a function to get table rows of a contract. This filters
                with accountName and for our case this is filtering with{" "}
                <i>from</i>.
              </p>
            </div>
            <div className="subTitle">
              <p>
                <h1 id="b46f">startEscrow function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>startescrow</i> action of{" "}
              <i>easyescrow2</i> contract.
            </p>
            <p>User1 needs to call this function to start escrow.</p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>startescrow</i> params of contract.
            </p>
            <p>Now let's take a look about actions.</p>
            <p>
              Note:{" "}
              <i>
                Please remember that actions are different along the escrow
                type.
              </i>
            </p>
            <p>
              <i>exchange</i>, <i>gift</i> (typeId==1, 2) has 3 actions and{" "}
              <i>purchase</i> has 1 action.
            </p>
            <p>
              Breaking point:{" "}
              <i>
                For purchase escrows, user1 don't put fee and fund at the very
                first time, he put funds after user2 agree with the purchase. So
                actions are different.
              </i>
            </p>
            <p>
              Now let's take a look common 3 actions used in this startEscrow
              function .
            </p>
            <p>- Action for Sending fee :</p>
            <pre className="codePart">
              {`
{
  account: "xtokens",
  name: "transfer",
  data: {
      from: from,
      to: "easyescrow2",
      quantity: "0.250000 XUSDC",
      memo: "Sending fee",
  },
  authorization,
}
                
                  `}
            </pre>
            <p>
              This is calling <i>transfer</i> action of <i>xtokens</i> contract
              with parmas in <i>data</i>. This is to send 0.25xusdc fee to{" "}
              <i>easyescrow2</i> contract as fee set as 0.25xusdc in easyescrow2
              contract (fees table). If there is insufficiant amount of
              XUSDC(0.25), then this will be reverted and raise error message.
            </p>
            <p>
              Note:{" "}
              <i>
                Once @Jim set new fee value then you need to change the amount
                in this code part. Make db to save fee data and read from db.
              </i>
            </p>
            <p>- Action for Sending token to escrow :</p>
            <pre className="codePart">
              {`
{
  account: fromToken.contract,
  name: "transfer",
  data: {
      from: from,
      to: "easyescrow2",
      quantity: fromQuantity,
      memo: "User1 deposit for escrow",
  },
  authorization,
}
                
                  `}
            </pre>
            <p>
              This is calling <i>transfer</i> action of{" "}
              <i>fromToken.contract</i> contract with parmas in <i>data</i>.
              This is to send <i>fromQuantity</i> to <i>easyescrow2</i> contract
              for escrow.
            </p>
            <p>
              Note:{" "}
              <i>
                fromToken is a token object that selected from escrow page. You
                can find fromToken's keys in CurrencyList.js in constant folder.{" "}
              </i>
            </p>
            <p>- startescrow action of easyescrow2:</p>
            <pre className="codePart">
              {`
{
  account: "easyescrow2",
  name: "startescrow",
  data: {
      typeId: typeId,
      from: from,
      to: to,
      fromTokens: [
          {
              contract: fromToken.contract,
              quantity: fromQuantity,
          },
      ],
      fromNfts: [],
      toTokens: [
          {
              contract: toToken.contract,
              quantity: toQuantity,
          },
      ],
      toNfts: [],
      deliverType: deliverType,
      expiry: expiry,
  },
  authorization,
}
                
                  `}
            </pre>
            <p>
              This is calling <i>startescrow</i> action of <i>easyescrow2</i>{" "}
              contract with parmas in <i>data</i>. This is to save escrow info
              to <i>escrows</i> table of <i>easyescrow2</i> contract.
            </p>
            <p>
              Note:{" "}
              <i>
                fromToken is a token object that selected from escrow page. You
                can find fromToken's keys in CurrencyList.js in constant folder.{" "}
                Also this action of contract is checking caller is correct and
                he paied fee and sent token for escrow.
              </i>
            </p>
            <p>
              You can find data of action is different in each escrow. That's
              why required params are different for each escrow.
            </p>

            <div className="subTitle">
              <p>
                <h1 id="b46f">fillEscrow function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>fillescrow</i> action of{" "}
              <i>easyescrow2</i> contract.
            </p>
            <p>
              User1(for purchase, contest) or user2(for exchange) needs to call
              this function to fill escrow.
            </p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>fillescrow</i> params of contract.
            </p>
            <p>
              You would be familiar with params except <i>actor</i>.{" "}
              <i>actor</i> is an account name that is calling this action. This
              will be user1 for purchase, contest. And will be user2 for
              exchange. And for gift it is called automatically once time
              reached.
            </p>
            <p>
              Especially, <i>exchange</i> has 3 actions and that's why user2
              also need to pay fee and escrow his fund to our contract.
            </p>
            <p>
              Note:{" "}
              <i>
                For gift escrow, the authorization is easyescrow2 account and
                this action is called automatically with private key of
                easyescrow2 once time reached. That's why it looks like
                something differant. Need to call this with cron job.
              </i>
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">cancelEscrow function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>cancelescrow</i> action of{" "}
              <i>easyescrow2</i> contract.
            </p>
            <p>
              <i>from</i> is creator of this escrow.
              <i>escrowId</i> is escrow id stored in proton table.
            </p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>cancelescrow</i> params of contract. Once cancel, escrowed
              funds returned back to funders and fee is also returned.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">startPurchase function</h1>
              </p>
            </div>
            <p>
              This is function to send fee and escrow fund to{" "}
              <i>easeyescrow2</i> contract. This function should be called at
              the point user1 click 'initiate escrow' btn after user2 agrees
              with purchase. You can notice that it is just calling token
              contract's transfer action once you take a look actions.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">negoPurchase function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>negopurchase</i> action of{" "}
              <i>easyescrow2</i> contract.
            </p>
            <p>
              This action is to negotiate other user's asking at another user's
              end. This action change <i>easyescrow2</i> table info for purchase
              (typeId==3, 4). This action should be called negotiate purchase
              each other for purchase escrow.
            </p>
            <p>
              Here parameter <i>from</i> is the creator of this purchase
              escrow(user1), and <i>to</i> is user2(seller).{" "}
            </p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>negoPurchase</i> params of contract.
            </p>
            <div className="end">
              <div className="subTitle">
                <p>
                  <h1 id="b46f">Conclusion</h1>
                </p>
              </div>

              <p>
                I have made all example calls in each escrow pages and just
                disable those. You can refer those to call above actions.
              </p>
              <p>
                Note:{" "}
                <i>
                  All actions have conditions to be called. It would throgh
                  error once you try to call those with wrong logic. For an
                  example to call fillEscrow function, the caller should be
                  creator of that escrow, otherwise it will throgh authorization
                  error. Please have in mind those are working one only as
                  expected and tested fully in my end.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial1Component;
