module.exports = (
    name,
   
  ) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/Xhmtl1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <title>HouseHelp App Receipt</title>
        <style type="text/css">
          @media screen and (max-width: 600px) {
     
          }
          @media screen and (max-width: 400px) {
            
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f0fcff ">
        <center
          class="wrapper"
          style="
            width: 100%;
            table-layout: fixed;
            background-color: #f6f9fc;
            padding-bottom: 40px;
          "
        >
          <div class="webkit" style="max-width: 600px; background-color: #ffffff">
            <table
              class="outer"
              align
              center
              style="
                margin: 0 auto;
                width: 100%;
                max-width: 600px;
                border-spacing: 0;
                font-family: sans-serif;
                color: #4a4a4a;
                font-family: 'Poppins';
              "
            >
              <!-- Logo Row -->
              <tr>
                <td style="padding: 0">
                  <table width="100%" style="border-spacing: 0; text-align: left">
                    <tr>
                      <td style="background-color: #EADFD3; padding: 20px 30px">
                        <a href="https://www.househelpapp.com"
                          ><img
                            src="https://res.cloudinary.com/dtovtmfea/image/upload/v1706227017/hha-subscription-logo_nqsqz5.png"
                            width="160"
                            alt="logo"
                            title="logo"
                            style="border: 0"
                        /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Banner Row -->
              <tr>
                <td
                  style="
                    padding: 0;
                    background: #EADFD3;
                    background-repeat: no-repeat;
                    max-width: 600px;
                    width: 100%;
                    height: 480px;
                  "
                >
                  <table width="100%" style="border-spacing: 0">
                    <tr>
                      <td
                        class="main-column"
                        style="padding: 0; font-size: 0; padding-top: 40px"
                      >
                        <table
                          class="banner-column"
                          style="
                            border-spacing: 0;
                            max-width: 600px;
                            display: inline-block;
                            vertical-align: top;
                            margin: 0 auto;
                          "
                        >
                          <tr>
                            <td
                              class="banner-padding"
                              style="padding: 15px 12px 0px 12px"
                            >
                              <table class="content" style="border-spacing: 0">
                                <tr>
                                  <td class="top-text-div" style="padding: 0px 32px 0px 32px">
                                    <p
                                      style="
                                        font-size: 24px;
                                        font-weight: 700;
                                        color: #1e1e1e;
                                        font-family: 'Poppins',
                                      "
                                      class="header-main"
                                    >
                                      Hi ${name}, your subscription to our service has expired. <span style="font-size: 40px;">☹️</span>
                                    </p>
                                    <p
                                      style="
                                        font-size: 18px;
                                        font-weight: 400;
                                        color: #1e1e1e;
                                      "
                                    >
                                    Please renew your subscription, to stay
                                    connected with customers close to you. <span style="font-size: 24px;">🤝</span>
                                    </p>
                                    <img
                                      src="https://res.cloudinary.com/dtovtmfea/image/upload/v1706227178/hh-man-foldingarms_1_vhqfle.png"
                                      width="200"
                                      style="
                                        border: 0;
                                        margin-top: 2.5rem;
                                        float: right;
                                        width: 100%;
                                        max-width: 80px;
                                      
                                      "
                                      alt="money-man"
                                      title="money man"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table style="border-spacing: 0"></table>
                      </td>
                    </tr>
                  </table>         
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
    </html>
    
      `;
  };
  
      // <td class="info-descript" style="padding:0;">
                              // <p style="font-size: 18px; font-weight:600; color: #000000; padding-top: 6px;">Date & Time</p>
                              // <p style="font-size: 16px; font-weight:500; color: #000000; padding-top: 1px;"> <span style="font-weight:600">Started: </span> ${formatCurrTimeStarted} </p>
                              // <p style="font-size: 16px; font-weight:500; color: #000000; padding-top: 1px;"> <span style="font-weight:600">Ended: </span>  ${formatCurrTimeEnded} </p>
                              //    </td>