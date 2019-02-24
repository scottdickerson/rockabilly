import PropTypes from "prop-types";

const ArtistSchema = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  thumbnail: PropTypes.string.isRequired,
  detailImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    photoCredit: PropTypes.node.isRequired
  }),
  audio: PropTypes.shape({
    src: PropTypes.string.isRequired,
    songTitle: PropTypes.node.isRequired,
    writtenBy: PropTypes.node.isRequired,
    performedBy: PropTypes.node.isRequired
  })
};

export default ArtistSchema;
