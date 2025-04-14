import { Edit, Mail, Phone } from "lucide-react"

function TeamMemberCard({ member, onEdit }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="team-card">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 border flex items-center justify-center overflow-hidden">
            {member.avatarUrl ? (
              <img
                src={member.avatarUrl || "/placeholder.svg"}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium">{getInitials(member.name)}</span>
            )}
          </div>
          <div>
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        </div>
        <button className="p-2 text-gray-500 hover:text-primary-DEFAULT rounded-full" onClick={onEdit}>
          <Edit className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-gray-500" />
          <span>{member.email}</span>
        </div>
        {member.phone && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-gray-500" />
            <span>{member.phone}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard
