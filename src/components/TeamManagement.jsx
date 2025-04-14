import { useState } from "react"
import { Plus, Search } from "lucide-react"
import TeamMemberCard from "./TeamMemberCard"
import TeamMemberForm from "./TeamMemberForm"
import { useAppContext } from "../context/AppContext"

function TeamManagement() {
  const { teamMembers } = useAppContext()
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [editingMember, setEditingMember] = useState(null)

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 p-6 md:p-10 ml-0 md:ml-64">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-gray-500">View and manage your team members</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search team members..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="px-4 py-2 bg-primary-DEFAULT text-black rounded-md flex items-center gap-2"
              onClick={() => {
                setIsAddingMember(true)
                setEditingMember(null)
              }}
            >
              <Plus className="h-4 w-4" />
              Add Member
            </button>
          </div>

          {(isAddingMember || editingMember) && (
            <TeamMemberForm
              memberId={editingMember}
              onClose={() => {
                setIsAddingMember(false)
                setEditingMember(null)
              }}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onEdit={() => {
                  setEditingMember(member.id)
                  setIsAddingMember(false)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamManagement
