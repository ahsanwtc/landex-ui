# Getting Started with Create React App

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5e1d528-e14c-4629-938f-6933bcd1737c/deploy-status)](https://app.netlify.com/sites/landex-ui-e6f7c2/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Development
First create a `.env.development` file and have a variable `REACT_APP_GOOGLE_MAP_API_KEY` set to the maps key:

```
REACT_APP_GOOGLE_MAP_API_KEY=some-key-value
```

Then run following command in terminal:

```bash
$ npm start
```

## Further development

- [x] Generate metadata file.
- [ ] Editable and dragable polygons on map.
- [ ] Restrict drawing on water.
- [ ] Restrict drawing to only one polygon.
- [ ] Adding multiple ownerships when it is an apartment building, so each apartment in building can have different owner.
- [ ] Restrict minting at same location twice or by any other user.
