import * as React from "react";
// import '../css/tutorial.css';
import "../css/knowledge.css";

function KnowledgeComponent(props) {
  return (
    <>
      <div className="container">
        <div className="knowledgeBody">
          <div className="title">
            <h1 data-selectable-paragraph="">
              <strong className="ce">
                Get to know about the proton contract and proton web sdk
              </strong>
            </h1>
          </div>
          <div className="mainContent">
            <div className="subTitle">
              <p>
                <h1 id="b46f">What is Proton</h1>
              </p>
            </div>
            <div>
              <p>
                Proton is a layer one proof-of-stake blockchain that leverages
                cutting-edge WebAssembly (WASM) smart contracts to enable
                high-performant, scalable and sustainable computation.
                Developers can leverage Proton to easily and securely build
                tokens, NFTs, exchanges, lending markets and much more.
              </p>

              <div>
                <p>A simple Proton smart contract has the structure:</p>
                <pre className="codePart">
                  {`
import { Contract, print } from 'proton-tsc'

@contract("hello")
class HelloContract extends Contract {
    @action("say")
    say(text: string): void {
        print(text);
    }
}`}
                </pre>
              </div>
            </div>
            <p>
              We deploy it to an account, then we can use that account name to
              call this contract functions. (Let's assume that account name is
              <i> myaccount123</i> for future usage.)
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">Call proton contract actions from js.</h1>
              </p>
            </div>

            <p>
              The above <i>hello</i> contract (that deployed to{" "}
              <i>myaccount123</i> address) has one action(function) name of{" "}
              <i>say</i>.
            </p>
            <p>I will demonstrate how to call that action from js part.</p>
            <pre className="codePart">
              {`
import { ApiClass } from "@proton/api";
const api = new ApiClass("https://protontestnet.greymass.com"); //in case of test net
// const api = new ApiClass("https://proton.greymass.com"); //in case of real net
const authorization = [
    {
        actor: ctx.auth.actor, // account name of caller
        permission: ctx.auth.permission, //account permission of caller
    },
];
async function callSay ( text ) {
    actions = [
        {
            account: "myaccount123",
            name: "say",
            data: {
                text: text
            },
            authorization,
        },
    ]
    await walletCtx.session.transact({
        transaction: {
            actions,
        },
    });
}
                
                  `}
            </pre>
            <p>Let's dig into each line of code.</p>
            <p>
              <i>api</i> this is api to connect with proton chain. Proton has
              two types of network. One is real net and other one is testnet. We
              can deploy our contract to testnet and real net. So once our
              contract is deployed to real net then you should use real net
              endpoint.
            </p>
            <p>
              Note:{" "}
              <i>
                As I deployed to proton real net, and test net using same name
                of account So you only need to change network.
              </i>
            </p>
            <p>
              <i>authorization</i> This is for account that are used to call
              actions. For our case we saved loggedin user's account to auth
              varable of authcontext <i>ctx.auth</i> and so reading that infos
              and calling using that. In other words, we are calling action
              using user's account that is loggedin to easyescrow.io.
            </p>
            <p>
              <i>session</i> This is proton session to call proton contract
              actions with loggedin account. For our case, We save session to{" "}
              <i>wallet-context.js</i> after user get loggedin to our site. So
              here used walletCtx.session.
            </p>
            <p>
              <i>actions</i> This is bunch of actions to call. Each action is an
              object to have <i>account</i>, <i>name</i>, <i>data</i>,{" "}
              <i>authorization</i>.
            </p>
            <p>
              <i>account</i> This is a account name that contract deployed to.
              In this case, We have deployed above proton contract to{" "}
              <i>myaccount123</i>. So we used that here.
            </p>
            <p>
              <i>name</i> This is a action name of contract to call. In this
              case, We call <i>say</i> action. So we used that here.
            </p>
            <p>
              <i>data</i> This is parameters of action that is called. In this
              case, <i>say</i> action has one parmeter of <i>text</i>.
            </p>
          </div>
          <div className="subTitle">
            <p>
              <h1 id="b46f">Conclusion</h1>
            </p>
          </div>
          <div className="end">
            <p>
              I have demonstrated how to call proton contract from js part with
              a very simple example.
            </p>
            <p>
              All contracts and sdks that I have made have those structures
              above.
            </p>
            <p>Very simple enough.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeComponent;
