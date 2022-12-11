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
            --toastBarBackground: #e32737cc;
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

        li {
            color: white;
            font-size: 14px;
            line-height: 16pxpx;
            font-family: Poppins;
            margin-bottom: 8px;
        }

        label {
            color: white;
            font-family: Poppins;
            font-size: 14px;
            line-height: 15.6px;
            letter-spacing: 3px;
        }

        input {
        }

        input[type='text'] {
            border-radius: 4px;
            background-color: #aaaaaa;
            padding: 8px;
        }

        textarea {
            border-radius: 4px;
            background-color: #aaaaaa;
            max-height: 200px;
            padding: 8px;
            flex-grow: 1;
        }

        button[type='submit'] {
            border-radius: 4px;
            background-color: #e3273777;
            padding: 4px;
            color: white;
            transition: 0.5s;
        }
        button[type='submit']:disabled {
            border-radius: 4px;
            background-color: gray;
            padding: 4px;
            color: white;
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
