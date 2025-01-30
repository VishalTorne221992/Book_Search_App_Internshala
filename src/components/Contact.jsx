import '/src/styles/formstyle.css'

function Contact() {
  return (
    <div className='contactf' >
      <h1 className='text-2xl font-extrabold'>Contact Us</h1>
      <form className="formContact" action="">

        <div className="formelem">
          <label className='formfield labelfm' htmlFor="">First Name:</label>
          <input className='formfield inputstyle' type="text" name="fname" id="fname" />
          </div>

        <div className="formelem">
          <label className='formfield labelfm' htmlFor="">Last Name:</label>
          <input className='formfield inputstyle' type="text" name="lname" id="lname" />
          </div>

        <div className="formelem">
          <label className='formfield labelfm' htmlFor="">Last Name:</label>
          <input className='formfield inputstyle' type="email" name="email" id="email" />
          </div>

        <div className="formelemtxt">
          <label className='formfield labelfm' htmlFor="">Message</label>
          <textarea className='formfield inputstyletxtArea' name="" id="" cols="30" rows="10"></textarea>
          </div>


        <input className='btnSubmit' type="submit" value="Submit" />

      </form>


    </div>

  )
}

export default Contact