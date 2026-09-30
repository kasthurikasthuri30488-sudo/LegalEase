let generatedText = "";


/* SCROLL TO GENERATOR */

function scrollToGenerator() {

    document
        .getElementById("generator")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ABOUT */

function showAbout() {

    document
        .getElementById("about")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* GENERATE DOCUMENT */

function generateDocument() {

    const type =
        document.getElementById("documentType").value;

    const name =
        document.getElementById("userName").value.trim();

    const party =
        document.getElementById("partyName").value.trim();

    const purpose =
        document.getElementById("purpose").value.trim();

    const date =
        document.getElementById("documentDate").value;


    /* VALIDATION */

    if (!type || !name || !party || !purpose || !date) {

        alert(
            "Please fill all required fields."
        );

        return;
    }


    /* DATE FORMAT */

    const formattedDate =
        new Date(date).toLocaleDateString(
            "en-IN"
        );


    /* DOCUMENT */

    generatedText = `
${type.toUpperCase()}

This document is prepared between ${name} and ${party}.

Date: ${formattedDate}

PURPOSE

${purpose}

PARTIES

Party 1:
${name}

Party 2:
${party}

TERMS AND CONDITIONS

1. Both parties agree to the purpose described above.

2. Both parties shall provide accurate information
and fulfil their respective responsibilities.

3. Any changes to this document should be mutually
agreed upon by the parties.

4. The parties should comply with applicable laws
and regulations.

DECLARATION

The information provided for preparing this draft
has been entered by the user and should be reviewed
for accuracy before actual use.

SIGNATURE

Party 1: ______________________

Name: ${name}

Party 2: ______________________

Name: ${party}

Date: ${formattedDate}
`;


    const output =
        document.getElementById("documentOutput");


    output.innerHTML = `

        <div class="generated-document">

            <h2>${type}</h2>

            <p>
                <b>Date:</b>
                ${formattedDate}
            </p>

            <p>
                This document is prepared between
                <b>${name}</b> and
                <b>${party}</b>.
            </p>

            <h3>PURPOSE</h3>

            <p>
                ${purpose}
            </p>

            <h3>PARTIES</h3>

            <p>
                <b>Party 1:</b> ${name}
            </p>

            <p>
                <b>Party 2:</b> ${party}
            </p>

            <h3>TERMS AND CONDITIONS</h3>

            <p>
                1. Both parties agree to the purpose
                described above.
            </p>

            <p>
                2. Both parties shall provide accurate
                information and fulfil their respective
                responsibilities.
            </p>

            <p>
                3. Any changes should be mutually agreed
                upon by the parties.
            </p>

            <p>
                4. The parties should comply with
                applicable laws and regulations.
            </p>

            <h3>DECLARATION</h3>

            <p>
                The information provided for preparing
                this draft should be reviewed for
                accuracy before actual use.
            </p>

            <br>

            <p>
                Party 1 Signature:
                ______________________
            </p>

            <p>
                Party 2 Signature:
                ______________________
            </p>

        </div>
    `;
}


/* DOWNLOAD */

function downloadDocument() {

    if (!generatedText) {

        alert(
            "Please generate a document first."
        );

        return;
    }


    const blob = new Blob(
        [generatedText],
        {
            type: "text/plain"
        }
    );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "LegalEase_Document.txt";


    link.click();


    URL.revokeObjectURL(url);
}