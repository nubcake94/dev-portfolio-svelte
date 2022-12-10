<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;

    @font-face {
        font-family: Poppins;
        src: url('assets/fonts/Poppins-Regular.ttf');
        font-weight: 500;
    }

    @font-face {
        font-family: Poppins;
        src: url('assets/fonts/Poppins-Bold.ttf');
        font-weight: bold;
    }

    @font-face {
        font-family: PoiretOne;
        src: url('assets/fonts/PoiretOne-Regular.ttf');
        font-weight: 500;
    }

    @layer base {
        :root {
            background-color: #101010;
        }

        h1 {
            color: white;
            font-size: 38px;
            font-family: Poppins;
        }
        h2 {
            color: white;
            font-size: 32px;
            font-family: PoiretOne;
        }
        h4 {
            color: white;
            font-size: 24px;
            font-family: Poppins;
        }
        h5 {
            color: white;
            font-size: 18px;
            font-family: Poppins;
        }

        p {
            color: white;
            font-size: 14px;
            font-family: Poppins;
        }
    }

    .caption-text {
        text-transform: uppercase;
        color: white;
        font-family: Poppins;
        font-size: 14px;
        line-height: 15.6px;
    }

    .divider {
        height: 4px;
        border-radius: 16px;
        background-color: #aaaaaa;
    }
</style>
