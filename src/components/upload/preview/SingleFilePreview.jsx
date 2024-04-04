import PropTypes from 'prop-types';

export default function SingleFilePreview({ file }) {
  if (!file) {
    return null;
  }

  
  console.log('File type:', file.type);
  
  const fileUrl = typeof file === 'string' ? file : file.preview;

  const isImage = file.type ? file.type.startsWith('image/') : false;

  const isVideo = file.type ? file.type.startsWith('video/') : false;

  const isExcel = file.type ? file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : false;

  if (isImage) {
    return (
      <img
        alt="file preview"
        src={fileUrl}
        style={{
          top: 8,
          left: 8,
          zIndex: 8,
          borderRadius: 1,
          position: 'absolute',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
        }}
      />
    );
  }

  if (isVideo) {
    return (
      <video
        src={fileUrl}
        alt="file preview"
        style={{
          top: 8,
          left: 8,
          zIndex: 8,
          borderRadius: 1,
          position: 'absolute',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
        }}
      >
        <track kind="captions" src="" />
      </video>
    );
  }

  
  
  if (isExcel) {
    return (

        <div style={{
          top: '50%',
          left: '50%',
          zIndex: 8,
          border: '1px solid #ccc',
          borderRadius: 5,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          maxWidth: '100%',
        }}>
          <strong>Excel File Selected:</strong> {file.name}
        </div>
    );
  }

  

  return null;
}

SingleFilePreview.propTypes = {
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
