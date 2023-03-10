import { Col, Container, Row, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Player from '../component/playerPageComponent/player'
import { useStoreState, useStoreActions } from 'easy-peasy';
import VideoListItem from '../component/playerPageComponent/videoListItem';
import { useEffect } from 'react';


const PlayerPage = () => {
    const { playlistId } = useParams()
    const playlistArray = useStoreState((state) => Object.values(state.playlist.data))
    const playlistItem = playlistArray.filter((item) => item.playlistId == playlistId)

    if (playlistItem.length == 0) {
        const action = useStoreActions((action) => action.playlist)
        action.getPlaylist(playlistId)
    }

    if (playlistItem.length == 0) return
    console.log(playlistItem)

    return (
        <Container style={{ marginTop: '20px' }}>
            <Row>
                <Col>
                    <Player />
                    <span>{playlistItem[0].channelTitle}</span>
                </Col>
                <Col style={{
                    position: 'relative',
                    aspectRatio: '3/1',
                    overflowX: 'hidden',
                    overflowY: 'scroll',

                }}>
                    <Card>
                        <Card.Body>
                            <Card.Title><span>{playlistItem[0].channelTitle}</span></Card.Title>
                            <Card.Text style={{
                                scrollSnapAlign: 'start',
                            }}>
                                <VideoListItem videoListItem={playlistItem[0].playlistItems} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div><h1>note please</h1></div>
        </Container>
    )
}

export default PlayerPage