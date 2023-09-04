import "../src/styles/styles.css"
import { useRef, useState } from "react"
import EmailCapture from "./EmailCapture"

function App() {
  // // captures name input value
  // const nameHolder = useRef()
  // // holds name input value
  // const nameInput = nameHolder.value
  // // captures email input value
  // const emailHolder = useRef()
  // // holds email input value
  // const emailInput = emailHolder.value

  //email error logic---
  // set up error states in css
  const [error, addError] = useState(false)
  const [success, addSuccess] = useState(false)
  // capture email and set email
  const [userEmail, setUserEmail] = useState("")

  const captureEmail = (event) => {
    if (
      !event.target.value === "" ||
      !event.target.value.includes("@") ||
      !event.target.value.includes(".com")
    ) {
      setUserEmail(event.target.value)
      addError(true)
      console.log("ERROR must be an email")
    } else {
      setUserEmail(event.target.value)
      addError(false)
      addSuccess(true)
    }
  }

  // creat app that reads the amount of emails there are and adds number to counter when the btn is clicked
  const [emailNumber, increaseEmailNumber] = useState(0)
  // const [userName, showName] = useState(" ");

  return (
    <main>
      <div className="background-img"></div>
      <section className="sign-up row flex">
        <div className="sign-up__left-col">
          <div>
            <h1>Learn to code by watching others!</h1>
            <p>
              See how experienced developers solve real-time problems. Watching
              scripted tutorials is great, but understanding how developers
              think is invaluable.
            </p>
          </div>
          <EmailCapture
            emailNumber={emailNumber}
            // name={nameInput}
            email={userEmail}
          />
        </div>
        <div className="sign-up__right-col">
          <div>
            <a
              href="#"
              className="sign-up__right-col__btn btn"
            >
              <strong>Try it free for 7 days</strong> then $20/mo. thereafter
            </a>
          </div>
          <form className="sign-up__right-col__form">
            {/* <label
              className="sign-up__right-col__form__label"
              htmlFor="Name"
            >
              Name
              <input
                // className={
                //   !error && nameInput == "string" ? "no-error" : "error"
                // }
                onChange={captureEmail}
                className="no-error"
                name="name"
                type="text"
                placeholder="Enter your name..."
              ></input>
            </label> */}
            <label
              className="sign-up__right-col__form__label"
              htmlFor="email"
            >
              Email
              <input
                value={userEmail}
                onChange={captureEmail}
                className={
                  error
                    ? "error sign-up__right-col__form__input"
                    : success
                    ? "no-error success sign-up__right-col__form__input"
                    : "no-error sign-up__right-col__form__input"
                }
                name="email"
                type="text"
                placeholder="Enter your email..."
              ></input>
            </label>
            <button
              // onClick={(e) => {
              //   e.preventDefault()
              //   increaseEmailNumber(emailNumber + 1)
              //   addError(!error)
              // }}
              // onClick={captureEmail}
              href="#"
              className="sign-up__right-col__form__form-btn btn"
            >
              <strong>Claim your free Trial</strong>
            </button>
            <p>
              By clicking the button, you are agreeing to our
              <a
                href="#"
                className="sign-up__right-col__terms"
              >
                Terms & Conditions
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default App
