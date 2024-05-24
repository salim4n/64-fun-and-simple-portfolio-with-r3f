import { useState } from 'react'
import {
useGLTF,
OrbitControls,
Environment, 
Float,
PresentationControls,
ContactShadows,
Html,
Text, 
} 
from '@react-three/drei'



export default function Experience()
{
    const arrayUrl = [
        "https://salim-laimeche-portfolio.vercel.app/",
        "https://tfjs-playground.vercel.app/",
        "https://pdf.credential.net/5co0dy0w_1716539401928.pdf"
    ]
    const [myIndexArrayUrl, setMyIndexArrayUrl ] = useState(0)
    const computer = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
        )

    const changeIframeUrl = () => {
        if(myIndexArrayUrl >= arrayUrl.length -1) {
            setMyIndexArrayUrl(0)
        } else {
            setMyIndexArrayUrl(myIndexArrayUrl + 1)
        }
    };

    return <>
        <color args={['#241a1a']} attach="background" />
        <OrbitControls makeDefault />
        <Environment preset='city' />
        <PresentationControls 
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={0.4}>
            <rectAreaLight
        width={ 2.5 }
        height={ 1.65 }
        intensity={ 65 }
        color={ '#ff6900' }
        rotation={ [ - 0.1, Math.PI, 0 ] }
        position={ [ 0, 0.55, - 1.15 ] }
    />
            <primitive 
                style={{cursor: 'pointer'}}
                object={ computer.scene } 
                position-y={-1.2}
                onClick={changeIframeUrl}
            >
                <Html 
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1.17}
                    position={ [ 0, 1.56, - 1.4 ] }
                    rotation-x={ - 0.256 }
                >
                    {myIndexArrayUrl === 0 && <iframe src={arrayUrl[0]} />}
                    {myIndexArrayUrl === 1 && <iframe src={arrayUrl[1]} />}
                    {myIndexArrayUrl === 2 && <iframe src={arrayUrl[2]} />}

                </Html>
            </primitive>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                position={ [ 2, 0.75, 0.75 ] }
                rotation-y={ - 1.25 }
                maxWidth={2}
                textAlign='center'
            >
                SALIM LAIMECHE
            </Text>
            <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 0.1 }
            position={ [ 2, -0.5, 0.75 ] }
            rotation-y={ - 1.25 }
            maxWidth={2}
            textAlign='center'
            color={'silver'}
            >
                (click on Laptop to switch between projects)
            </Text>
            
            </Float>
        </PresentationControls>
        

        <ContactShadows 
            position-y={ -1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
         />
    

    </>
}