import React from 'react'

const Blog = () => {
    return (
        <div className='bg-body-tertiary'>
            <div className='bg-white width-setter mx-auto px-5 my-4 py-3 border rounded-5'>
                <h1>Data Analysis: Everything You Need to Know</h1>
                <p className='fw-bold mt-4'>
                    <span> Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.<br /> </span>
                    <span>~ Geoffrey Moore</span>
                </p>
                <p>Companies today need every edge and advantage they can get. Thanks to obstacles like rapidly changing markets, economic uncertainty, finicky consumer attitudes, and even global pandemics, businesses today are working with slimmer margins for error.</p>

                <p>Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis.</p>

                <p>This strategy is common sense, and it applies to personal life as well as business. No one makes important decisions without first finding out what’s at stake, the pros and cons, and the possible outcomes. Similarly, no company that wants to succeed should make decisions based on bad data. Organisations need information; they need data. This is where data analysis enters the picture.</p>

                <p className="fw-bold">What is data analysis?</p>

                <p>Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis.</p>

                <p>The information gathered from the data are then presented visually in the form of charts, graphs, or dashboards.</p>

                <p>The information discovered can help aid the company’s or organisation’s growth. Decision-makers will be able to come to an actionable conclusion and make the right business decisions.</p>

                <p className="fw-bold">Types of Data Analysis:</p>

                <p><b>Text Analysis</b></p>

                <p>Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases or data mining tools. It used to transform raw data into business information.</p>

                <p><b>Descriptive Analysis</b></p>

                <p>The descriptive analysis method is the starting point to any analytic reflection, and it aims to answer the question of what happened? It does this by ordering, manipulating, and interpreting raw data from various sources to turn it into valuable insights for your organisation.</p>

                <p><b>Exploratory Analysis</b></p>

                <p>As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and solutions for specific problems.</p>

                <p><b>Statistical Analysis</b></p>

                <p>Statistical Analysis shows “What happened?” by using past data in the form of dashboards. Statistical Analysis includes collection, Analysis, interpretation, presentation, and modelling of data. It analyses a set of data or a sample of data.</p>

                <p><b>Predictive analysis</b></p>

                <p>The predictive method allows you to look into the future to answer the question: what will happen? In order to do this, it uses the results of the previously mentioned descriptive, exploratory, and diagnostic analysis, in addition to machine learning (ML) and artificial intelligence (AI). Like this, you can uncover future trends, potential problems or inefficiencies, connections, and casualties in your data.</p>

                <p><b>Diagnostic Analysis</b></p>

                <p>Diagnostic Analysis shows “Why did it happen?” by finding the cause from the insight found in Statistical Analysis. This Analysis is useful to identify behaviour patterns of data. If a new problem arrives in your business process, then you can look into this Analysis to find similar patterns of that problem. And it may have chances to use similar prescriptions for the new problems.</p>

                <p className="fw-bold">Data Analysis Process</p>

                <p>The Data Analysis Process is gathering information by using a proper application or tool which allows you to explore the data and find a pattern in it.</p>

                <p>It has following phases:</p>

                <p><b>Identify:</b></p>

                <p>You first need to identify why you need it in the first place. The identification is the stage in which you establish the questions you will need to answer. For example, what is the customer's perception of our brand? Or what type of packaging is more engaging to our potential customers? Once the questions are outlined you are ready for the next step.</p>

                <p><b>Collect:</b></p>

                <p>This is the stage where you start collecting the needed data. Here, you define which sources of information you will use and how you will use them. The collection of data can come in different forms such as internal or external sources, surveys, interviews, questionnaires, focus groups, among others.</p>

                <p><b>Cleaning:</b></p>

                <p>Now whatever data is collected may not be useful or irrelevant to your aim of Analysis, hence it should be cleaned. The data which is collected may contain duplicate records, white spaces or errors. The data should be cleaned and error free. This phase must be done before Analysis because based on data cleaning, your output of Analysis will be closer to your expected outcome.</p>

                <p><b>Analysis:</b></p>

                <p>Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help you to understand, interpret, and derive conclusions based on the requirements.</p>

                <p><b>Interpretation:</b></p>

                <p>After analysing your data, it’s finally time to interpret your results. You can choose the way to express or communicate your data analysis either you can use simply in words or maybe a table or chart.</p>

                <p><b>Visualisation:</b></p>

                <p>Data visualisation is very common in your day to day life; they often appear in the form of charts and graphs. In other words, data shown graphically so that it will be easier for the human brain to understand and process it.</p>
            </div>
        </div>
    )
}

export default Blog
