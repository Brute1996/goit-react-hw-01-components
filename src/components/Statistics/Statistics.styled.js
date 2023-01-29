import styled from '@emotion/styled'

const StatisticsSection = styled.section`
    width: 600px;
    max-height: 300px;
    margin: 40px auto;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    overflow: hidden;
`

const StatisticsTitle = styled.h2`
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
    padding: 40px;
    display: flex;
    justify-content: center;

    color: #717577;
`

const StatisticsList = styled.ul`
display: flex;
width: 100%;
height: 100px;
`

const StatisticsItem = styled.li`
display: flex;
width: calc(100%/5);
flex-direction: column;
align-items: center;
gap: 8px;
justify-content: center;
color: #fff;
background-color: ${({label}) => {
        switch (label) {
            case ".docx":
                return "#4fc3f6"
            case ".pdf":
                    return "#a43cf3"
            case ".mp3":
                    return "#e64c66"
            case ".psd":
                    return "#20b8c5"
            default:
                return " grey"
        };
}};

.percentage{
    font-size: 24px;
}

    


`

export {StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem}