function EmailCapture(props) {
  return (
    <div className="sign-up__left-col__email-counter">
      <h2>Emails captured</h2>
      <h1>{props.emailNumber}</h1>
      {/* <p>
        <strong>Name: </strong>
        {props.nameInput}
      </p> */}
      <p>
        <strong>Email: </strong>
        {props.email}
      </p>
    </div>
  )
}

export default EmailCapture
