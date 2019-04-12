# JobPostr

#### Guides

[Written Guide](https://coursetro.com/posts/code/170/Adonis-4-Tutorial---Learn-Adonis-4-in-this-Crash-Course) | [Video Guide](https://youtu.be/4Xe4DUHka1o)

---

#### Setup

1. Setup Aurelia.js
    1. `cd <ROOT_FOLDER>/aureliajs`
    2. `mkdir scripts`
    3. `npm install`
2. Setup Adonis.js
    1. `cd <ROOT_FOLDER>/adonisjs`
    2. Create and edit `.env`
        - Use `.env.example` as example
    3. Install database package
        - `pg` has been added to `package.json` by default
    4. `npm install`
3. Create scripts folder symlink
    - Linux: `ln -s <ABSOLUTE_PATH_TO_ROOT>/aureliajs/scripts <ABSOLUTE_PATH_TO_ROOT>/adonisjs/public`
    - Windows: `mklink /D <ABSOLUTE_PATH_TO_ROOT>/aureliajs/scripts <ABSOLUTE_PATH_TO_ROOT>/adonisjs/public`

---

#### Run

1. Aurelia.js
    1. Open new terminal
    2. `cd <ROOT_FOLDER>/aureliajs`
    3. `au build [--watch]`
        - `--watch` is optional
2. Adonis.js
    1. Open new terminal
    2. `cd <ROOT_FOLDER>/adonisjs`
    3. `adonis migration:run`
    4. `adonis serve [--dev]`
        - `--dev` for development server

---

#### Testing

- Aurelia.js
    1. `cd <ROOT_FOLDER>/aureliajs`
    2. `au test [--watch]`
        - `--watch` is optional
- Adonis.js
    1. `cd <ROOT_FOLDER>/adonisjs`
    2. `adonis test`
