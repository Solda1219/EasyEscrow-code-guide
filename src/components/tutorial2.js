import * as React from "react";
// import '../css/tutorial.css';
import "../css/knowledge.css";

function Tutorial2Component(props) {
  return (
    <>
      <div className="container">
        <div className="knowledgeBody">
          <div className="title">
            <h1 data-selectable-paragraph="">
              <strong className="ce">Escrow SDK for Pool</strong>
            </h1>
          </div>

          <div className="mainContent">
            <p>
              This is sdk to call actions of <i>easyescrowpl</i> contract.
            </p>
            <p>
              Note:
              <i>
                I've deployed contract to account name of easyescrowpl both real
                net and test net.
              </i>
            </p>
            <p>
              <i>easyescrowpl</i> contract has table to save pool escrow data
              and fee data and you can simply think it as mysql db. One is{" "}
              <i>escrows</i>, and other one is <i>fees</i>.
            </p>
            <p>
              <i>escrows</i> This table is to store pool escrow data and has
              columns of <i>escrowId</i>, <i>from</i>, <i>contesters</i>,{" "}
              <i>fromTokens</i>, <i>fromNfts</i>, <i>expiry</i> .
            </p>
            <p>
              - <i>escrowId</i> This is primary key of table that are increasing
              automatically.
            </p>
            <p>
              - <i>from</i> This is name of user1 who created this pool.
            </p>
            <p>
              - <i>contesters</i> This is array of names who participated this
              pool.
            </p>
            <p>
              - <i>fromTokens</i> This is array of tokens that contesters should
              be escrow. In our case length is 1, because we use only one token.
            </p>
            <p>
              - <i>fromNfts</i> This is array of NFTs that contesters want to
              escrow. In our case just [] because we don't use NFT.
            </p>

            <p>
              <i>fees</i> This table is to store fee data of easyescrowpl
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
                <h1 id="b46f">startPool function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>startepool</i> action of{" "}
              <i>easyescrowpl</i> contract.
            </p>
            <p>User1 needs to call this function to create a pool.</p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>startepool</i> params of contract.
            </p>
            <p>Now let's take a look about actions.</p>
            <p>
              This also has 3 actions and very similar with <i>startEscrow</i>{" "}
              of <i>easyescrowSDK</i>. First action is to send fee to our
              contract. Second action is to escrow funds to our contract. Third
              action is to store pool data to <i>escrows</i> table of{" "}
              <i>easyescrowpl</i>.
            </p>

            <div className="subTitle">
              <p>
                <h1 id="b46f">partakePool function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>partakepool</i> action of{" "}
              <i>easyescrowpl</i> contract.
            </p>
            <p>
              This is function is used by contesters who want to participate
              pool.
            </p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>partakepool</i> params of contract.
            </p>
            <p>Now let's take a look about actions.</p>
            <p>
              This also has 3 actions(sending fee, escrow fund, calliing
              partakepool action).
            </p>
            <p>Let's take a look about some params you may have doubt.</p>
            <p>
              <i>actor</i> This is contester name that is calling this action to
              participate pool of id <i>escrowId</i>.
            </p>
            <p>
              <i>fromToken</i> This is amount of token that user1 deposited
              making pool of id <i>escrowId</i>. Need to read this data using{" "}
              <i>fetchEscrows</i> function and filter by <i>escrowId</i>
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">cancelPool function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>cancelpool</i> action of{" "}
              <i>easyescrowpl</i> contract.
            </p>
            <p>
              <i>actor</i> can be pool creator or contester.
              <i>escrowId</i> is escrow id stored in proton table.
            </p>
            <p>
              Please have in mind the params should be matched with{" "}
              <i>cancelpool</i> params of contract. Once cancel, escrowed funds
              returned back to funders and fee is also returned.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">fillPool function</h1>
              </p>
            </div>
            <p>
              This is function to call <i>fillpool</i> action of{" "}
              <i>easyescrowpl</i> contract.
            </p>
            <p>
              <i>actor</i> should be pool creator. Only pool creator can call
              this function.
              <i>escrowId</i> is escrow id stored in proton table.
            </p>
            <div className="end">
              <div className="subTitle">
                <p>
                  <h1 id="b46f">Conclusion</h1>
                </p>
              </div>

              <p>
                I have made all example calls in each pool functions and just
                disable those. You can refer those to call above actions.
              </p>
              <p>
                Note:{" "}
                <i>
                  All actions have conditions to be called. It would throgh
                  error once you try to call those with wrong logic. Please have
                  in mind those are working one only as expected and tested
                  fully in my end.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial2Component;
