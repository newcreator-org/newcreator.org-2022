import "../styles/globals.scss";
import { googleTagManagerId } from '../utils/gtm';
import GoogleTagManager, {
    GoogleTagManagerId,
} from '../components/GoogleTagManager';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GoogleTagManager
                googleTagManagerId={GoogleTagManagerId}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
