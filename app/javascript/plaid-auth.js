function connectToPlaid() {
  console.log('connection')
}

const createLinkToken = async () => {
    const res = await fetch("/plaid/create_link_token");
    const data = await res.json();
    const linkToken = data.link_token;
    return linkToken;
  };

const handler = Plaid.create({
    token: await createLinkToken(),
    onSuccess: async (publicToken, metadata) => {
      await fetch("/plaid/exchange_public_token", {
        method: "POST",
        body: JSON.stringify({ public_token: publicToken }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onEvent: (eventName, metadata) => {
      console.log("Event:", eventName);
      console.log("Metadata:", metadata);
    },
    onExit: (error, metadata) => {
      console.log(error, metadata);
    },
  });

const button = document.getElementById('plaid-button')
button.addEventListener('click', () =>{
    handler.open()
})