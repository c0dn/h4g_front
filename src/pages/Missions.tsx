import { useState } from "react";
import { Heading } from "../components/heading";
import { Divider } from "../components/divider";

type Mission = {
  id: number;
  name: string;
  description: string;
  points: number;
  status: 0 | 1 | 2; // 0:Uncompledted, 1:Pending, 2:Completed
};

const missions: Mission[] = [
  {
    id: 1,
    name: "Grade C to B",
    description: "Improve your grade from C to B",
    points: 50,
    status: 0,
  },
  {
    id: 2,
    name: "Full attendance",
    description: "Attend all classes without any absences",
    points: 30,
    status: 2,
  },
  {
    id: 3,
    name: "Submit homework on time",
    description: "Submit all homework assignments on time",
    points: 20,
    status: 1,
  },
  {
    id: 4,
    name: "Participate in group discussions",
    description: "Actively contribute to at least three group discussions",
    points: 25,
    status: 0,
  },
  {
    id: 5,
    name: "Help a peer",
    description: "Assist a classmate with a challenging topic",
    points: 15,
    status: 1,
  },
  {
    id: 6,
    name: "Achieve top 10% in a quiz",
    description: "Score within the top 10% of a class quiz",
    points: 40,
    status: 0,
  },
  {
    id: 7,
    name: "Read extra material",
    description: "Finish an additional reading assignment beyond the syllabus",
    points: 20,
    status: 2,
  },
  {
    id: 8,
    name: "Attend a workshop",
    description: "Participate in one educational workshop or seminar",
    points: 35,
    status: 2,
  },
  {
    id: 9,
    name: "Organize a study group",
    description: "Host a study session with at least 3 classmates",
    points: 25,
    status: 1,
  },
  {
    id: 10,
    name: "Prepare revision notes",
    description: "Create comprehensive notes for a subject and share with peers",
    points: 30,
    status: 0,
  },
  {
    id: 11,
    name: "Answer a bonus question",
    description: "Correctly answer a bonus question during a class session",
    points: 10,
    status: 2,
  },
  {
    id: 12,
    name: "Improve attendance rate",
    description: "Increase your attendance rate by 10%",
    points: 15,
    status: 1,
  },
  {
    id: 13,
    name: "Volunteer for a task",
    description: "Take responsibility for an additional task during class",
    points: 20,
    status: 2,
  },
  {
    id: 14,
    name: "Improve a test score",
    description: "Improve your score in the next test by at least 10 points",
    points: 50,
    status: 0,
  },
];

export default function Missions() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [requestDescription, setRequestDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (mission: Mission) => {
    setSelectedMission(mission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMission(null);
    setRequestDescription("");
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // Handle task completion submission logic
    if (selectedMission) {
      selectedMission.status = 2; // Set status to "Pending"
      console.log(`Mission: ${selectedMission.name}`);
      console.log(`Request Description: ${requestDescription}`);
      // Update the data here if you're managing a state or database
      closeModal();
    }
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto lg:px-4">
          <Heading className="pb-2">Missions</Heading>
          <Divider />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:flex-auto lg:px-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`relative rounded-lg border p-4 shadow-sm hover:shadow-md cursor-pointer ${mission.status === 0
              ? "bg-orange-50 border-orange-300"   // Uncompleted: Light orange background
              : mission.status === 1
                ? "bg-green-50 border-green-300"      // Completed: Light green background
                : "bg-blue-50 border-blue-300"       // Pending: Light blue background
              }`}
            onClick={() => openModal(mission)}
          >
            <div
              className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${mission.status === 0
                ? "bg-orange-400 text-white" // Uncompleted: Orange background, white text
                : mission.status === 1
                  ? "bg-green-400 text-white" // Completed: Green background, white text
                  : "bg-blue-400 text-white"  // Pending: Blue background, white text
                }`}
            >
              {mission.status === 0
                ? "Uncompleted"
                : mission.status === 1
                  ? "Completed"
                  : "Pending"}
            </div>
            <h2 className="mt-5 text-base font-medium text-gray-900">{mission.name}</h2>
            <p className="mt-2 text-sm text-gray-500">{mission.description}</p>
            <div className="mt-4 text-sm font-semibold text-red-500">
              Points: {mission.points}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMission && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white shadow-lg">
            {selectedMission.status === 0 ? (
              <div className="p-6">
                <h2 className="text-lg font-normal text-gray-900">
                  Request Complete: <span className="font-medium">{selectedMission.name}</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">{`"${selectedMission.description}"`}</p>
                <textarea
                  className="mt-4 w-full rounded-md border border-gray-400 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter request description..."
                  value={requestDescription}
                  onChange={(e) => setRequestDescription(e.target.value)}
                ></textarea>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    className="border border-gray-200 rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-zinc-100"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : selectedMission.status === 1 ? (
              <div className="rounded-lg bg-white p-6">
                <h2 className="text-lg font-medium text-green-600">
                  Task Completed: <span>{selectedMission.name}</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">You have already completed this task.</p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    onClick={closeModal}
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6">
                <h2 className="text-lg font-medium text-blue-600">
                  Task Pending: <span>{selectedMission.name}</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">This task is still pending.</p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    onClick={closeModal}
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
