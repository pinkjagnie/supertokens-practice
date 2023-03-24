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
            style: `
                [data-supertokens~=container] {
                    --palette-background: 51, 51, 51;
                    --palette-inputBackground: 41, 41, 41;
                    --palette-inputBorder: 41, 41, 41;
                    --palette-textTitle: 255, 255, 255;
                    --palette-textLabel: 255, 255, 255;
                    --palette-textPrimary: 255, 255, 255;
                    --palette-error: 173, 46, 46;
                    --palette-textInput: 169, 169, 169;
                    --palette-textLink: 169, 169, 169;
                    --palette-superTokensBrandingBackground: 173, 189, 196;
                    --palette-superTokensBrandingText: 255, 255, 255;
                }
            `
        }), Session.init()],
};

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/emailpassword/introduction",
};
