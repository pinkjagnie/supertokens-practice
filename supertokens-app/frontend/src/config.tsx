import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

export function getApiDomain() {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

export const SuperTokensConfig = {
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [EmailPassword.init({
        signInAndUpFeature: {
            signUpForm: {
                formFields: [{
                    id: "name",
                    label: "Full name",
                    placeholder: "First name and last name"
                }, {
                    id: "age",
                    label: "Your age",
                    placeholder: "How old are you?",
                }, {
                    id: "country",
                    label: "Your country",
                    placeholder: "Where do you live?",
                    optional: true
                }]
            }
    }}), Session.init()],
};

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/emailpassword/introduction",
};
