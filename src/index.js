const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const willAttend = document.querySelector("input#confirm-attendance");
const willntAttend = document.querySelector("input#decline-attendance")


openModal.addEventListener("click", () =>
{
    modal.showModal();
});

closeModal.addEventListener("click", () =>
{
    modal.close();
});

willAttend.addEventListener("click", () =>
{
    rsvpYes();
});

willntAttend.addEventListener("click", () =>
{
    rsvpNo();
})


function convertTextToURL(urlText)
{
    const urlReplace = {
        "space": "%20",
        "new-line": "%0A"
    };
    urlText = urlText.replace(" ", urlReplace["space"]);
    urlText = urlText.replace("\n", urlReplace["new-line"]);
    return urlText;
}


function rsvpYes()
{
    let guestName = document.querySelector('input#party-name').value;
    let plusOne = document.querySelector('input#plus-one-name').value;
    let messageBody;

    if (guestName === '')
    {
        alert("Who the fuck are you, dude?");
    }
    else
    {
        if (plusOne === '')
        {
            messageBody = guestName;
        }
        else
        {
            messageBody = guestName+" and "+plusOne;
        }

        let mailURL = convertTextToURL('mailto:tkolberg@asu.edu?subject=Wedding-RSVP&body=Guest Name(s):\n'+messageBody);
        window.open(mailURL);
    }
}


function rsvpNo()
{
    let guestName = document.querySelector('input#party-name').value;

    if (guestName === '')
    {
        guestName = '{ANONYMOUS LOSER}';
    }

    let messageBody = "Dear T.J. and Victoria,\nI, '"+guestName+"', sincerely apologise for my atrocious, and unforgivable rejection to attend your wedding on a beautiful goddamn beach- because you know, I have somehow better things to do like {INSERT BULLSHIT REASON HERE}.  From now on, I promise to always re-evaluate my life each morning, because I am clearly incapable of prioritising if I picked {REFER TO PREVIOUS BULLSHIT REASON} over a beach wedding- nay, a chillax beach wedding.  Fuck me, T.J. and Victoria, you should know that from the bottom of my heart, I am truly sorry.  As a gesture of my remorse, I got you a little something for the wedding: {INSERT CONFIRMATION CODE FOR PURCHASE OF MEGAYACHT SO THAT WE CAN SKIP THE CRUISE AND JUST TAKE OUR 180+FOOT MINIMUM SHIP}.  Enjoy the honeymoon, I will be not at a beach like the loser I am/we are.  -"+guestName;
    let mailURL = convertTextToURL("mailto:tkolberg@asu.edu?subject=Wedding-RSVP&body="+messageBody);
    window.open(mailURL);
}
