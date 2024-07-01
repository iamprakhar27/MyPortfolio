
function Footer() {
    return (
        <>


            <footer className="bg-gray-950 text-gray-400 py-4">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
                    <p className="text-sm">Developed by Prakhar Gupta</p>
                </div>
            </footer>

        </>
    );
}

export default Footer;