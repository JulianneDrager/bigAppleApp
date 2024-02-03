const multer = require("multer");
const path = require("path");

// upload
const upload = multer();
const nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

// email data
smtpTransport = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "applefireappdemo@gmail.com",
      pass: "jtmpydvgxhzzsjau",
    },
  })
);

// app.post("/send-email", upload.single("file"), (req, res) => {
exports.sendEmail = async (req, res) => {
  const {
    number,
    name,
    phone,
    street,
    city,
    zipcode,
    notes,
    reqBy,
    management,
    fdnyTest,
    violation,
    violationDate,
    estimateDate,
    // OPTIONS
    // BUILDING TYPE
    centralStation,
    firePump,
    jockeyPump,
    localPump,
    // SYSTEM TYPE
    combo,
    sprinkler,
    standPipe,
    // SIGNAGE TYPE
    comboCurbBox,
    comboLocation,
    callFDNY,
  } = req.body;
  //   const file = req.file;
  console.log("est", estimateDate);
  console.log("vio", violationDate);
  console.log("fdny", fdnyTest);
  console.log("status", violation);

  //prepare email content
  const mailOptions = {
    from: "applefireappdemo@gmail.com",
    to: "applefireappdemo@gmail.com",
    subject: "test email",
    html: `
      <td class="esd-stripe" align="center" bgcolor="#5A6F8E" style="background-color: #5a6f8e;">
      <table class="es-content-body" style="background-color: #ffffff;" width="560" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
          <tbody>
              <tr>
                  <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                              <tr>
                                  <td class="es-m-p0r es-m-p20b esd-container-frame" width="520" valign="top" align="center">
                                      <table width="100%" cellspacing="0" cellpadding="2">
                                          <tbody>
                        
                                              <tr>
                                                  <td align="left">
                                                    
                                                     
                                                      <div><img src="https://img1.wsimg.com/isteam/ip/6bb49086-ab23-4f12-abed-6e3e159532d0/logo/header.JPG/:/rs=h:160,cg:true,m/qt=q:95"/></div>
                                                      <div style="color: #000000; padding: 10px; background-color: #cccccc;"> Client Estimate</div>
                                                      <div style="color: #000000; padding: 5px 20px;">Estimate Number: ${number} <br/> Name Of Estimator: ${name} <br/> Date of Estimate: ${estimateDate} <br/> Estimate Requested By: ${reqBy} <br/> Manager/Owner of Building: ${management} <br/> Customer Phone Number: ${phone} </div>
                                                      
                                                      <div style="color: #000000; padding: 10px; background-color: #cccccc;">Building Address</div>
                                                      <div style="color: #000000; padding: 5px 20px;">Street: ${street} <br/> City: ${city} <br/> STATE: NY <br/> ZIPCODE ${zipcode} <br/> Estimator Notes: ${notes}</div>

                                                      <div style="color: #000000; padding: 10px; background-color: #cccccc;">Violation Status</div>
                                                      <div style="color: #000000; padding: 5px 20px;"> ${[
                                                        violation ===
                                                        "VIOLATION"
                                                          ? "VIOLATION"
                                                          : "NOT A VIOLATION",
                                                      ]} <br/> ${[
      violation === "VIOLATION" ? "Violation Date: " + violationDate : null,
    ]} </div>

                                                      <div style="color: #000000; padding: 10px; background-color: #cccccc;">FDNY Status</div>
                                                      <div style="color: #000000; padding: 5px 20px;">TEST DATE: ${fdnyTest}</div>     

                                                      <div style="color: #000000; padding: 10px; background-color: #cccccc;">BUILDING TYPES</div>
                                                      <div style="color: #000000; padding: 5px 20px;">
                                                      ${[
                                                        centralStation === "CS"
                                                          ? "<div>Central Station</div>"
                                                          : null,
                                                      ]} 
                                                
                                                         ${[
                                                           firePump === "FP"
                                                             ? "<div>Fire Pump</div>"
                                                             : null,
                                                         ]}
                                                     
                                                          ${[
                                                            jockeyPump === "JP"
                                                              ? "<div>Jockey Pump</div>"
                                                              : null,
                                                          ]}
                                                          ${[
                                                            localPump === "LA"
                                                              ? "<div>Local Alarm</div>"
                                                              : null,
                                                          ]} 
                                                          </div>
                                                          <div style="color: #000000; padding: 10px; background-color: #cccccc;">SYSTEM TYPES</div>
                                                          <div style="color: #000000; padding: 5px 20px;">
                                                          ${[
                                                            combo === "CB"
                                                              ? "<div>Combo</div>"
                                                              : null,
                                                          ]} 
                                                
                                                         ${[
                                                           sprinkler === "SP"
                                                             ? "<div>Sprinkler</div>"
                                                             : null,
                                                         ]}
                                                     
                                                          ${[
                                                            standPipe === "ST"
                                                              ? "<div>Stand Pipe</div>"
                                                              : null,
                                                          ]}
                                                          </div>
                                                          <div style="color: #000000; padding: 10px; background-color: #cccccc;">SIGN TYPES</div>
                                                          <div style="color: #000000; padding: 5px 20px;">
                                                          ${[
                                                            comboCurbBox ===
                                                            "CCB"
                                                              ? "<div>Combo Curb Box</div>"
                                                              : null,
                                                          ]} 
                                                    
                                                             ${[
                                                               comboLocation ===
                                                               "CL"
                                                                 ? "<div>Combo Location</div>"
                                                                 : null,
                                                             ]}
                                                         
                                                              ${[
                                                                callFDNY ===
                                                                "CF"
                                                                  ? "<div>Call FDNY</div>"
                                                                  : null,
                                                              ]}
                                                              </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </td>
            `,
    //   attachments: file
    //     ? [{ filename: file.originalname, content: file.buffer }]
    //     : [],
  };

  // send email
  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    } else {
      res.send({
        success: true,
        message: "Thanks for contacting us. We will get back to you shortly",
      });
    }
  });
};
