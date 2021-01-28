const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [{ 
        plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                "@primary-color": "#698643",
                "@link-color": "#698643",
            }
        }
    }],
    options: {
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
            }
        }
    }
};