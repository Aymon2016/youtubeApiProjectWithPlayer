import { Stack } from "@mui/system";
import { useState } from "react";
import { useStoreState } from "easy-peasy";
import PlaylistsCard from "../component/playlistitemcard/card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect } from "react";
import { Audio } from 'react-loader-spinner'

const HomePage = () => {

    const playlistArray = useStoreState((state) => Object.values(state.playlist.data))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (playlistArray) {
            setLoading(false)
        }
    }, [])
    // if (!playlistArray) return


    return (
        <Container>
            {
                loading ? <div style={{
                    margin: '250px',

                }}>
                    <Audio
                        height="50px"
                        width="50px"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                </div> :
                    <Row className="justify-content-md-center mt-2">
                        {playlistArray.length > 0 && (
                            <Stack direction={'row'} spacing={2}>
                                {playlistArray.map((item) => (
                                    <Col xs={4} >
                                        <PlaylistsCard
                                            key={item.playlistId}
                                            playlistThumnails={item.thumbnails}
                                            playlistTitle={item.playlistTitle}
                                            channelTitle={item.channelTitle}
                                            playlistId={item.playlistId}

                                        />
                                    </Col>
                                ))}
                            </Stack>
                        )}

                    </Row>
            }
        </Container>
    )
}

export default HomePage