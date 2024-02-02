import "../styles/globals.scss";
import { googleTagManagerId } from '../utils/gtm';
import GoogleTagManager, {
    GoogleTagManagerId,
} from '../components/googleTagManager';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GoogleTagManager gtmId={googleTagManagerId} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
