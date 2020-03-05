const Index = () => (
    <main>
        <h1>Test App</h1>
        <p>This is a test app to test next.js with custom service worker that support video file on Safari.</p>
        <video controls crossOrigin="anonymous" muted playsInline>
            <source type="video/mp4" src="0.mp4" />
        </video>
    </main>
)

export default Index