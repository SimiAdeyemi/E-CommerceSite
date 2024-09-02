# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
Assignment-2
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ projectpages
│  ├─ .eslintrc.json
│  ├─ .git
│  │  ├─ COMMIT_EDITMSG
│  │  ├─ config
│  │  ├─ description
│  │  ├─ FETCH_HEAD
│  │  ├─ HEAD
│  │  ├─ hooks
│  │  │  ├─ applypatch-msg.sample
│  │  │  ├─ commit-msg.sample
│  │  │  ├─ fsmonitor-watchman.sample
│  │  │  ├─ post-update.sample
│  │  │  ├─ pre-applypatch.sample
│  │  │  ├─ pre-commit.sample
│  │  │  ├─ pre-merge-commit.sample
│  │  │  ├─ pre-push.sample
│  │  │  ├─ pre-rebase.sample
│  │  │  ├─ pre-receive.sample
│  │  │  ├─ prepare-commit-msg.sample
│  │  │  ├─ push-to-checkout.sample
│  │  │  └─ update.sample
│  │  ├─ index
│  │  ├─ info
│  │  │  └─ exclude
│  │  ├─ objects
│  │  │  ├─ 18
│  │  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  │  ├─ 1a
│  │  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  │  ├─ 33
│  │  │  │  └─ 14e4780a0c8785366fdc3b8499668d163e33f8
│  │  │  ├─ 42
│  │  │  │  └─ 4dd1c652541a8c42694b38dfa419aec2dd8ce2
│  │  │  ├─ 46
│  │  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  │  ├─ 51
│  │  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  │  ├─ 57
│  │  │  │  └─ 05d4ea0457360a7c779a3ec1951f44a4d66175
│  │  │  ├─ 71
│  │  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  │  ├─ 7e
│  │  │  │  └─ 4bd91a03437328466a264489ce47e107635565
│  │  │  ├─ 87
│  │  │  │  └─ 5c01e819b90038f0c3e4aee2a4dcc2086b0e14
│  │  │  ├─ a7
│  │  │  │  └─ 7ac6f5cd7ef66a0b85ba650bddafdeb93ff229
│  │  │  ├─ bf
│  │  │  │  ├─ 047debcf999d6adb2347a5be7603f6f926251a
│  │  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  │  ├─ c0
│  │  │  │  └─ 6ce4277bda77d393d766604536c2809ba018d2
│  │  │  ├─ c4
│  │  │  │  └─ 033664f80d3cb9cb687fb5facbc82aedb302f6
│  │  │  ├─ d2
│  │  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  │  ├─ d6
│  │  │  │  └─ 06ecbbc03636f86a2ea3e08dab67d15284ba20
│  │  │  ├─ e7
│  │  │  │  └─ ff90fd2767199e09b281bfa87e08a90f33270e
│  │  │  ├─ fd
│  │  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  │  ├─ info
│  │  │  └─ pack
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ tags
│  ├─ .gitignore
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ Assets
│  │  └─ random_products_175.json
│  ├─ next-env.d.ts
│  ├─ next.config.mjs
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ pages
│  │  └─ products
│  │     ├─ search.tsx
│  │     └─ [id].tsx
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ next.svg
│  │  └─ vercel.svg
│  ├─ README.md
│  ├─ tailwind.config.ts
│  └─ tsconfig.json
├─ public
│  ├─ Paomedia-Small-N-Flat-Shop.512.png
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ Assets
│  │  ├─ Logo.png
│  │  ├─ Product_Images
│  │  │  ├─ Beauty
│  │  │  │  ├─ Deodorant
│  │  │  │  │  ├─ Firefly neutral deodorant 36532.jpg
│  │  │  │  │  ├─ Firefly neutral deodorant 43347.jpg
│  │  │  │  │  ├─ Firefly neutral deodorant 6541.jpg
│  │  │  │  │  ├─ Firefly neutral deodorant 80011.jpg
│  │  │  │  │  └─ Firefly neutral deodorant 95908.jpg
│  │  │  │  ├─ Shampoo
│  │  │  │  │  ├─ Firefly neutral shampoo 21552.jpg
│  │  │  │  │  ├─ Firefly neutral shampoo 34739.jpg
│  │  │  │  │  ├─ Firefly neutral shampoo 47539.jpg
│  │  │  │  │  ├─ Firefly neutral shampoo 57744.jpg
│  │  │  │  │  └─ Firefly neutral shampoo 97786.jpg
│  │  │  │  └─ Shower Gel
│  │  │  │     ├─ Firefly neutral shower gel 34739.jpg
│  │  │  │     ├─ Firefly shower gel 25281.jpg
│  │  │  │     ├─ Firefly shower gel 28122.jpg
│  │  │  │     ├─ Firefly shower gel 52602.jpg
│  │  │  │     └─ Firefly shower gel 81564.jpg
│  │  │  ├─ Clothing
│  │  │  │  ├─ Belt
│  │  │  │  │  ├─ Firefly belt 34739.jpg
│  │  │  │  │  ├─ Firefly belt 47539.jpg
│  │  │  │  │  ├─ Firefly belt 88749.jpg
│  │  │  │  │  ├─ Firefly belt 93101.jpg
│  │  │  │  │  └─ Firefly belt 98832.jpg
│  │  │  │  ├─ Dress
│  │  │  │  │  ├─ Firefly dress product 51385.jpg
│  │  │  │  │  ├─ Firefly dress product 93101.jpg
│  │  │  │  │  ├─ Firefly dress product item only 81805.jpg
│  │  │  │  │  ├─ Firefly dress product, dark 43146.jpg
│  │  │  │  │  └─ Firefly dress product, dark 75095.jpg
│  │  │  │  ├─ Hat
│  │  │  │  │  ├─ Firefly hat product 20505.jpg
│  │  │  │  │  ├─ Firefly hat product 20646.jpg
│  │  │  │  │  ├─ Firefly hat product 44098.jpg
│  │  │  │  │  ├─ Firefly hat product 45320.jpg
│  │  │  │  │  └─ Firefly hat product 59250.jpg
│  │  │  │  ├─ Jacket
│  │  │  │  │  ├─ Firefly jacket clothing product 25281.jpg
│  │  │  │  │  ├─ Firefly jacket clothing product 28122.jpg
│  │  │  │  │  ├─ Firefly jacket clothing product 52602.jpg
│  │  │  │  │  ├─ Firefly jacket clothing product 81564.jpg
│  │  │  │  │  └─ Firefly jacket product 20505.jpg
│  │  │  │  ├─ Ring
│  │  │  │  │  ├─ Firefly ring product 20505.jpg
│  │  │  │  │  ├─ Firefly ring product 42162.jpg
│  │  │  │  │  ├─ Firefly ring product 44098.jpg
│  │  │  │  │  ├─ Firefly ring product 59250.jpg
│  │  │  │  │  └─ Firefly ring product 92647.jpg
│  │  │  │  ├─ Shoes
│  │  │  │  │  ├─ Firefly shoes clothing product 25281.jpg
│  │  │  │  │  ├─ Firefly shoes clothing product 28122.jpg
│  │  │  │  │  ├─ Firefly shoes clothing product 42162.jpg
│  │  │  │  │  ├─ Firefly shoes clothing product 52602.jpg
│  │  │  │  │  └─ Firefly shoes clothing product 81564.jpg
│  │  │  │  ├─ Socks
│  │  │  │  │  ├─ Firefly multipack black socks product 56238.jpg
│  │  │  │  │  ├─ Firefly multipack black socks product 88058.jpg
│  │  │  │  │  ├─ Firefly multipack socks product 50630.jpg
│  │  │  │  │  ├─ Firefly multipack socks product 56238.jpg
│  │  │  │  │  └─ Firefly socks product 42162.jpg
│  │  │  │  ├─ Sunglasses
│  │  │  │  │  ├─ Firefly cool dog wearing sunglasses 78591.jpg
│  │  │  │  │  ├─ Firefly sunglasses product 50630.jpg
│  │  │  │  │  ├─ Firefly sunglasses product 56238.jpg
│  │  │  │  │  ├─ Firefly sunglasses product 78591.jpg
│  │  │  │  │  └─ Firefly sunglasses product 87928.jpg
│  │  │  │  ├─ T-shirt
│  │  │  │  │  ├─ Firefly black t-shirt clothing product 48464.jpg
│  │  │  │  │  ├─ Firefly brown t-shirt clothing product 15315.jpg
│  │  │  │  │  ├─ Firefly cool dog wearing a shirt 40113.jpg
│  │  │  │  │  ├─ Firefly t-shirt clothing product 48740.jpg
│  │  │  │  │  └─ Firefly t-shirt clothing product 84494.jpg
│  │  │  │  └─ Trousers
│  │  │  │     ├─ Firefly trousers clothing product 28122.jpg
│  │  │  │     ├─ Firefly trousers clothing product 48740.jpg
│  │  │  │     ├─ Firefly trousers clothing product 52602.jpg
│  │  │  │     ├─ Firefly trousers clothing product 81564.jpg
│  │  │  │     └─ Firefly trousers clothing product 84379.jpg
│  │  │  ├─ Electronics
│  │  │  │  ├─ Desktop PC
│  │  │  │  │  ├─ Firefly desktop computer case only product 33657.jpg
│  │  │  │  │  ├─ Firefly desktop computer case only product 40113.jpg
│  │  │  │  │  ├─ Firefly desktop computer case only product 82092.jpg
│  │  │  │  │  ├─ Firefly desktop computer case only product 87841.jpg
│  │  │  │  │  └─ Firefly desktop computer product 34170.jpg
│  │  │  │  ├─ Earphones
│  │  │  │  │  ├─ Firefly earbuds product on wooden desk 40113.jpg
│  │  │  │  │  ├─ Firefly earbuds product on wooden desk 87841.jpg
│  │  │  │  │  ├─ Firefly earphones product on wooden desk 40113.jpg
│  │  │  │  │  ├─ Firefly earphones product on wooden desk 82092.jpg
│  │  │  │  │  └─ Firefly earphones product on wooden desk 87841.jpg
│  │  │  │  ├─ Keyboard
│  │  │  │  │  ├─ Firefly keyboard product on office desk 33657.jpg
│  │  │  │  │  ├─ Firefly keyboard product on office desk 36057.jpg
│  │  │  │  │  ├─ Firefly keyboard product on office desk 40113.jpg
│  │  │  │  │  ├─ Firefly keyboard product on office desk 48989.jpg
│  │  │  │  │  └─ Firefly keyboard product on office desk 8805.jpg
│  │  │  │  ├─ Laptop
│  │  │  │  │  ├─ Firefly laptop product 23942.jpg
│  │  │  │  │  ├─ Firefly laptop product 2870.jpg
│  │  │  │  │  ├─ Firefly laptop product 59061.jpg
│  │  │  │  │  ├─ Firefly laptop product 83382.jpg
│  │  │  │  │  └─ Firefly laptop product on office desk 8805.jpg
│  │  │  │  ├─ Mobile Phone
│  │  │  │  │  ├─ Firefly mobile phone 26919.jpg
│  │  │  │  │  ├─ Firefly mobile phone 48989.jpg
│  │  │  │  │  ├─ Firefly mobile phone 70288.jpg
│  │  │  │  │  ├─ Firefly mobile phone product 59061.jpg
│  │  │  │  │  └─ Firefly simple image of a mobile phone product with black screen 14327.jpg
│  │  │  │  ├─ Monitor
│  │  │  │  │  ├─ Firefly desktop computer monitor 12345.jpg
│  │  │  │  │  ├─ Firefly desktop computer monitor 36057.jpg
│  │  │  │  │  ├─ Firefly desktop computer monitor 37512.jpg
│  │  │  │  │  ├─ Firefly desktop computer monitor 47539.jpg
│  │  │  │  │  └─ Firefly desktop computer monitor 8805.jpg
│  │  │  │  ├─ Smart Watch
│  │  │  │  │  ├─ Firefly smart watch on office desk 16973.jpg
│  │  │  │  │  ├─ Firefly smart watch product on office desk 37512.jpg
│  │  │  │  │  ├─ Firefly smart watch product on office desk 50140.jpg
│  │  │  │  │  ├─ Firefly smartwatch on office desk 47048.jpg
│  │  │  │  │  └─ Firefly smartwatch on office desk 71446.jpg
│  │  │  │  ├─ Tablet
│  │  │  │  │  ├─ Firefly tablet product on office desk 25333.jpg
│  │  │  │  │  ├─ Firefly tablet product on office desk 32924.jpg
│  │  │  │  │  ├─ Firefly tablet product on office desk 45890.jpg
│  │  │  │  │  ├─ Firefly tablet product on office desk 47048.jpg
│  │  │  │  │  └─ Firefly tablet product on office desk 71446.jpg
│  │  │  │  ├─ Television
│  │  │  │  │  ├─ Firefly simple image of a tv product with black screen 14327.jpg
│  │  │  │  │  ├─ Firefly simple image of a tv product with black screen 21577.jpg
│  │  │  │  │  ├─ Firefly simple image of a tv product with black screen 68721.jpg
│  │  │  │  │  ├─ Firefly simple image of a tv product with black screen 69828.jpg
│  │  │  │  │  └─ Firefly television product 99408.jpg
│  │  │  │  └─ VR Headset
│  │  │  │     ├─ Firefly vr headset product on desk 28610.jpg
│  │  │  │     ├─ Firefly vr headset product on desk 45181.jpg
│  │  │  │     ├─ Firefly vr headset product on desk 45890.jpg
│  │  │  │     ├─ Firefly vr headset product on desk 58851.jpg
│  │  │  │     └─ Firefly vr headset product on desk 99408.jpg
│  │  │  ├─ Home & Garden
│  │  │  │  ├─ Barbecue Grill
│  │  │  │  │  ├─ Firefly barbecue grill 19234.jpg
│  │  │  │  │  ├─ Firefly barbecue grill product 59079.jpg
│  │  │  │  │  ├─ Firefly barbecue grill with burning coal 28491.jpg
│  │  │  │  │  ├─ Firefly barbecue grill with steak, vegetables and sauce on white background 29459.jpg
│  │  │  │  │  └─ Firefly barbecue grill with steak, vegetables and sauce on white background 40647.jpg
│  │  │  │  ├─ Deck Chair
│  │  │  │  │  ├─ Firefly deck chair product 223.jpg
│  │  │  │  │  ├─ Firefly deck chair product 39616.jpg
│  │  │  │  │  ├─ Firefly deck chair product 45181.jpg
│  │  │  │  │  ├─ Firefly deck chair product 78429.jpg
│  │  │  │  │  └─ Firefly deck chair product 90955.jpg
│  │  │  │  ├─ Flower Pot
│  │  │  │  │  ├─ Firefly flower pot 223.jpg
│  │  │  │  │  ├─ Firefly flower pot 29459.jpg
│  │  │  │  │  ├─ Firefly flower pot 40647.jpg
│  │  │  │  │  ├─ Firefly flower pot 6671.jpg
│  │  │  │  │  └─ Firefly flower pot 66810.jpg
│  │  │  │  ├─ Garden Pool
│  │  │  │  │  ├─ Firefly paddling pool product 223.jpg
│  │  │  │  │  ├─ Firefly paddling pool product 39616.jpg
│  │  │  │  │  ├─ Firefly paddling pool product 47382.jpg
│  │  │  │  │  ├─ Firefly paddling pool product 78429.jpg
│  │  │  │  │  └─ Firefly paddling pool product 90955.jpg
│  │  │  │  ├─ Hose
│  │  │  │  │  ├─ Firefly garden hose 32311.jpg
│  │  │  │  │  ├─ Firefly garden hose 48845.jpg
│  │  │  │  │  ├─ Firefly garden hose product 45612.jpg
│  │  │  │  │  ├─ Firefly garden hose product 47382.jpg
│  │  │  │  │  └─ Firefly garden hose product 48845.jpg
│  │  │  │  ├─ Lawn mower
│  │  │  │  │  ├─ Firefly lawn mower on grass 19073.jpg
│  │  │  │  │  ├─ Firefly lawn mower on grass 46164.jpg
│  │  │  │  │  ├─ Firefly lawn mower on grass 67801.jpg
│  │  │  │  │  ├─ Firefly lawn mower on grass 69588.jpg
│  │  │  │  │  └─ Firefly lawn mower on grass 82513.jpg
│  │  │  │  ├─ Rainwater Collector
│  │  │  │  │  ├─ Firefly rainwater collector tank 29459.jpg
│  │  │  │  │  ├─ Firefly rainwater collector tank 40647.jpg
│  │  │  │  │  ├─ Firefly rainwater collector tank 6671.jpg
│  │  │  │  │  ├─ Firefly rainwater collector tank 66810.jpg
│  │  │  │  │  └─ Firefly rainwater collector tank 91667.jpg
│  │  │  │  ├─ Spade
│  │  │  │  │  ├─ Firefly gardening spade 34997.jpg
│  │  │  │  │  ├─ Firefly gardening spade 44055.jpg
│  │  │  │  │  ├─ Firefly gardening spade 51170.jpg
│  │  │  │  │  ├─ Firefly gardening spade 65295.jpg
│  │  │  │  │  └─ Firefly gardening spade 98322.jpg
│  │  │  │  └─ Trowel
│  │  │  │     ├─ Firefly trowel 28658.jpg
│  │  │  │     ├─ Firefly trowel 3470.jpg
│  │  │  │     ├─ Firefly trowel 34997.jpg
│  │  │  │     ├─ Firefly trowel 58033.jpg
│  │  │  │     └─ Firefly trowel 90296.jpg
│  │  │  └─ Toys
│  │  │     ├─ Action Figure
│  │  │     │  ├─ Firefly fantasy assassin action figure toy 95697.jpg
│  │  │     │  ├─ Firefly fantasy sorcerer action figure toy 53777.jpg
│  │  │     │  ├─ Firefly fantasy sorcerer action figure toy 94736.jpg
│  │  │     │  ├─ Firefly fantasy warrior action figure toy 81380.jpg
│  │  │     │  └─ Firefly fantasy warrior action figure toy 94736.jpg
│  │  │     ├─ Doll
│  │  │     │  ├─ Firefly childrens doll 95697.jpg
│  │  │     │  ├─ Firefly doll 53777.jpg
│  │  │     │  ├─ Firefly doll 81380.jpg
│  │  │     │  ├─ Firefly doll 94736.jpg
│  │  │     │  └─ Firefly doll 96862.jpg
│  │  │     └─ Tabletop Game
│  │  │        ├─ Firefly board game with figures and cards 79634.jpg
│  │  │        ├─ Firefly fantasy roleplaying board game 94736.jpg
│  │  │        ├─ Firefly fantasy roleplaying board game 96862.jpg
│  │  │        ├─ Firefly strategy board game 50247.jpg
│  │  │        └─ Firefly tabletop game 95697.jpg
│  │  ├─ random_products_1.json
│  │  ├─ random_products_100.json
│  │  ├─ random_products_150.json
│  │  ├─ random_products_175.json
│  │  └─ shopping-basket.png
│  ├─ Components
│  │  └─ ProductList.tsx
│  ├─ e-commerce-stylesheet.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```#   E - C o m m e r c e S i t e  
 