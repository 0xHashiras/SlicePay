const ethers = require("ethers");
const fetch = require("node-fetch");

const privateKey = ""; 
let provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/3fICeI_o6SNZol-P-60tzyigVcA2M90J");
const wallet = new ethers.Wallet( privateKey,provider);

const chainId = 137; 
const apiBaseUrl = "https://api.1inch.dev/swap/v5.2/" + chainId;

const main =async () => {

    const swapParams = {
        src: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // Token address of USDC
        dst: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // Token address of DAI
        amount: "500000", // Amount of 1INCH to swap (in wei)
        from: "0x4d61b3cdf4e8A7B3aDFB628c50341fFdbc32C3B5",
        slippage: 1, // Maximum acceptable slippage percentage for the swap (e.g., 1 for 1%)
        disableEstimate: false, // Set to true to disable estimation of swap details
        allowPartialFill: false, // Set to true to allow partial filling of the swap order
    };

    const headers = { headers: { Authorization: "Bearer 3XB2HRdX6RTG6gOOXW48DBBrSqTcNlXl", accept: "application/json" } };

    function apiRequestUrl(methodName, queryParams) {
        return apiBaseUrl + methodName + "?" + new URLSearchParams(queryParams).toString();
    }
    async function buildTxForSwap(swapParams) {
        const url = apiRequestUrl("/swap", swapParams);
      
        // Fetch the swap transaction details from the API
        return fetch(url, headers)
          .then((res) => res.json()).then((res)=> res.tx);
    }

    const response = await buildTxForSwap(swapParams);
    console.log(response);

    console.log("signing and submitting tx...");
    // let signtx = await wallet.signTransaction(response.tx);
    const txResponse = await wallet.sendTransaction({
        "from":response.from,
        "to":response.to,
        "data":response.data,
        "value":response.value
    });

    console.log("txResponse -> ",txResponse);
}

main()