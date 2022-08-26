import * as React from "react";
// import '../css/tutorial.css';
import "../css/knowledge.css";
import { Link } from "react-router-dom";

function FaqComponent(props) {
  return (
    <>
      <div className="container">
        <div className="knowledgeBody">
          <div className="title">
            <h1 data-selectable-paragraph="">
              <strong className="ce">FAQ</strong>
            </h1>
          </div>

          <div className="mainContent">
            <div className="subTitle">
              <p>
                <h1 id="b46f">How to switch between tesnet and real net?</h1>
              </p>
            </div>
            <p>
              All contracts for esyescrow deployed to main net and test net with
              same name.
            </p>
            <p>
              Once you go to <i>constants/networks.js</i>, then you can see{" "}
              <i>for real comment</i>. Change with that.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">
                  Showing <i>to must be empty or a valid account</i> error while
                  calling actions.
                </h1>
              </p>
            </div>
            <p>
              This error is saying that <i>user2</i> account name that you typed
              in web doesn't exist. Please make sure you typed name for user2
              correctly without spacing.
            </p>
            <div className="subTitle">
              <p>
                <h1 id="b46f">
                  Showing <i>overdrawn balance</i> error while calling actions.
                </h1>
              </p>
            </div>
            <p>
              This is saying that the token amount you input or fee token amount
              is not sufficiant in your logedin wallet.
            </p>
            <div className="end">
              <div className="subTitle">
                <p>
                  <h1 id="b46f">
                    Showing <i>no account for ... find</i> error while calling
                    actions.
                  </h1>
                </p>
              </div>
              <p>
                This error raised if you try to call fill actions without
                deposit funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqComponent;
