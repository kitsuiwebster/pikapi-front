import React, { useEffect } from 'react';
import '../assets/scss/components/DownloadModal.scss';

function DownloadModal({ onClose, link1k, link4k }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <div className="downloadmodal-overlay" onClick={handleOverlayClick}>
            <div className="downloadmodal">
                <h2 className='downloadmodal-title'>Download Options</h2>
                <div className="downloadmodal-links">
                    <a href={link1k} download className="downloadmodal-button">Download 500x500px</a>
                    <a href={link4k} download className="downloadmodal-button">Download 4K</a>
                </div>
            </div>
        </div>
    );
}

export default DownloadModal;
