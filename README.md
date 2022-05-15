# 🧰 React Host with NextJS Remote and React Remote modules 🧰

> This repo host module federation with React as host and Next JS and React as remote app

* Disclaimer for NextJS apps you need the lates version of `@module-federation/nextjs-mf` that is a paid module, you can read more [here](https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-mf)

![Tux, the Linux mascot](/mf-blog.png)


#### ⬇️ Host
- It is a top-level app that depends on modules exposed from a remote app 
- Runs on port `8080`

#### ⬆️ Remote
- `remote-nextjs-module`
    - Exposes component to another app called host.
    - Runs on port `8081`

- `remote-react-module`
    - Exposes component to another app called host.
    - Runs on port `8082`

### 🛠️ Set Up and running repo
- Clone the project
- Navigate to `mf-react-nextjs` folder
- Run in the root folder: `yarn`
- Run: `yarn start`
- Navigate to: [http://localhost:8080/](http://localhost:8080/)


