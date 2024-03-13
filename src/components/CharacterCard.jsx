import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BouleDeCrystal from "../assets/image/bouleCrystal.png"

export default function CharacterCard({ character }) {
  return (
    <Box className='detail-character2' sx={{ minHeight: 350 }}>
      <div className='img-card'>
        <Link  to={`/dragonball/character/${character.id}`}>
          <img className='img-card-inside'
            src={character.image}
            alt={character.name}
          />
        </Link>
      </div>
      <Card
        variant="outlined"
        sx={({
          width: 300,
          height: 100,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          // overflow: 'hidden', agrandir le block
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          // '&:hover': {
          //   borderColor: theme.vars.palette.primary.outlinedHoverBorder,
          //   transform: 'translateY(-2px)',
          // }, zoomer le block
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },

        })}

      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="title-lg">
                {character.name}
              </Typography>
              <Typography level="body-sm">{character.ki}</Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: 'auto', alignSelf: 'flex-start' }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar variant="soft" color="neutral">
              <div className="button-acced-detail">
                <img src={BouleDeCrystal} />
              </div>
            </Avatar>
            <div>
              <Typography level="body-xs">{character.race} </Typography>
              <Typography level="body-sm">{character.affiliation}</Typography>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    ki: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
  }).isRequired,
};
