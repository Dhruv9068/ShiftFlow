import { motion } from 'framer-motion'; // Ensure framer-motion is installed

const howItWorksData = [
  {
    id: 1,
    title: 'Create Nodes',
    text: 'Select the type of nodes you want to create, such as inputs, outputs, or text nodes.',
  },
  {
    id: 2,
    title: 'Connect Nodes',
    text: 'Draw connections between the nodes to form your desired workflow.',
  },
  {
    id: 3,
    title: 'Submit and Analyze',
    text: 'Click the submit button to analyze the pipeline and get insights.',
  },
  {
    id: 4,
    title: 'Visualize Results',
    text: 'View the results of your analysis in a clear and concise format.',
  },
];

const HowItWorks = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-20 md:py-32 min-h-[100vh]"
      style={{
        backgroundColor: 'black',
        backgroundImage: 'linear-gradient(to bottom, rgba(4, 59, 93, 0.5), transparent)',
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto">
        
        {/* Left Column with Steps 1 and 2 */}
        <div className="flex flex-col items-start md:mr-10 px-4">
          {howItWorksData.slice(0, 2).map((step) => (
            <motion.div
              key={step.id}
              className="flex items-start mb-14" // Increased padding between steps
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-black shadow-lg text-white text-lg font-bold mr-6">
                {step.id}
              </div>
              <div className="text-white text-left text-sm md:text-lg">
                <h3 className="font-bold text-lg md:text-2xl">{step.title}</h3>
                <p className="text-xs md:text-md w-3/4 md:w-full">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Animated Text */}
        <motion.div
          className="flex flex-col items-center justify-center mx-auto mb-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginRight: '2rem' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text text-center my-20 mr-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'white',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            How It Works
          </motion.h1>
        </motion.div>

        {/* Right Column with Steps 3 and 4 */}
        <div className="flex flex-col items-start md:ml-10 px-4">
          {howItWorksData.slice(2).map((step) => (
            <motion.div
              key={step.id}
              className="flex items-start mb-14"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-black shadow-lg text-white text-lg font-bold mr-6">
                {step.id}
              </div>
              <div className="text-white text-left text-sm md:text-lg">
                <h3 className="font-bold text-lg md:text-2xl">{step.title}</h3>
                <p className="text-xs md:text-md w-3/4 md:w-full">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
