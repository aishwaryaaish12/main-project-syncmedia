import PropTypes from 'prop-types';

export default function SingleFilePreview({ file }) {
  if (!file) {
    return null;
  }

  
  console.log('File type:', file.type);
  
  const fileUrl = typeof file === 'string' ? file : file.preview;

  const isImage = file.type ? file.type.startsWith('image/') : false;

  const isVideo = file.type ? file.type.startsWith('video/') : false;

  const isText = file.type ? file.type.startsWith('text/') : false;

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

  if (isText) {
    // For text files, display the file content
    return (
      <pre
        style={{
          top: 8,
          left: 8,
          zIndex: 8,
          borderRadius: 1,
          position: 'absolute',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      >
        {fileUrl}
      </pre>
    );
  }

  return null;
}

SingleFilePreview.propTypes = {
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
